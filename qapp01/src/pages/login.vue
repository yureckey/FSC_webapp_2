<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">

        <q-card :style="loginCardStyle">
          <q-card-section>
            <!-- <q-avatar size="103px" class="absolute-center shadow-10"><img src="../statics/profile.svg"></q-avatar> -->
            <q-avatar size="100px" font-size="52px" color="teal" text-color="white" icon="login" class="absolute-center shadow-10" />
          </q-card-section>
          <!-- <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">
                Log in
              </div>
            </div>
          </q-card-section> -->
          <q-card-section>
            <q-form class="q-gutter-md">
              <!-- <q-input filled v-model="username" label="Username" lazy-rules /> -->
              <!-- <q-input type="password" filled v-model="password" label="Password" lazy-rules /> -->
              <q-input v-model="username" label="Email">
                <template v-slot:prepend>
                  <q-icon name="account_circle" />
                </template>
              </q-input>
              <q-input v-model="password" type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
              <div>
                <!-- <q-btn label="Login" to="/page2" type="button" color="primary"/> -->
                <q-btn label="Login" @click="login" type="button" color="primary"/>
              </div>
            </q-form>
          </q-card-section>

          <q-inner-loading :showing="loading_visible">
            <!-- <q-spinner-gears size="50px" color="primary" /> -->
            <q-spinner-grid size="4em" color="primary" />
          </q-inner-loading>

        </q-card>

        <q-card class="q-ma-md text-body2 text-center">
          <q-card-section>
            for this test you should use this data:<br>
            <strong>email:</strong> {{ username }} <br>
            <strong>password:</strong> {{ password }}<br>
            <strong>cb company id:</strong> XXXXXXXXXXXXXXXXXXXXXXXXXX<br>
            one of those for <strong>decision tree id:</strong><br>
            XXXXXXXXXXXXXXXXXXXXXXXXXX1<br>
            XXXXXXXXXXXXXXXXXXXXXXXXXX2<br>
            XXXXXXXXXXXXXXXXXXXXXXXXXX3<br>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import Axios from 'axios'

export default {
  created () {
    // just to wake up our Azure Function
    var config = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: { command: 'ping' },
      url: 'https://justasimpletestok01.azurewebsites.net/api/HttpTrigger1?code=7mZOadETGYP7mRoZNDdKXcf8i4UGpwZPV7jP8LLSwb9aTUxj00Wpow=='
    }
    Axios(config)
      .then(function (res) {
        console.log('ping call res: ', res)
      })
  },
  methods: {
    login: function () {
      console.log('login1')
      var that = this

      this.loading_visible = true

      var config = {
        method: 'post',
        // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        headers: { 'Content-Type': 'application/json' },
        data: {
          command: 'login',
          params: { username: this.username, password: this.password }
        },
        url: 'https://justasimpletestok01.azurewebsites.net/api/HttpTrigger1?code=7mZOadETGYP7mRoZNDdKXcf8i4UGpwZPV7jP8LLSwb9aTUxj00Wpow=='
      }
      Axios(config)
        .then(function (res) {
          that.loading_visible = false
          console.log('call res: ', res)
          if (res && res.data && res.data.access_token) {
            console.log('save this token: ', res.data.access_token)

            that.$root.$data.access_token = res.data.access_token
            that.$root.$data.cb_company_id = ''
            that.$root.$data.decision_tree_id = 'decision_tree_id'

            that.$router.push('page1')
          } else if (res && res.data && res.data.name === 'Error') {
            // error toast res.data.message
            that.$q.notify({
              message: res.data.message,
              color: 'negative',
              icon: 'report_problem',
              position: 'center',
              timeout: 10000,
              multiLine: true
            })

            that.$root.$data.access_token = null
          }
        })
        .catch(function (error) {
          console.log('call err: ', error)
          that.loading_visible = false

          that.$root.$data.access_token = null

          that.$q.notify({
            message: JSON.stringify(error),
            color: 'negative',
            icon: 'report_problem',
            position: 'center',
            timeout: 10000,
            multiLine: true
            // avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
            /* actions: [
              { label: 'Reply', color: 'yellow', handler: () => {  } }
            ] */
          })
          // that.$root.$data.access_token = 'XXX1'
          // that.$root.$data.cb_company_id = 'XXX2'
          // that.$root.$data.decision_tree_id = 'XXX3'
          // that.$router.push('page1')
        })
    }
  },
  computed: {
    loginCardStyle () {
      /*
        Extra Small xs Up to 599px
        Small sm Up to 1023px
        Medium md Up to 1439px
        Large lg Up to 1919px
        Extra Large xl Bigger than 1920px
        */
      if (this.$q.screen.lt.sm) return { width: '80%' }
      else if (this.$q.screen.lt.md) return { width: '50%' }
      else if (this.$q.screen.lt.lg) return { width: '30%' }
      else return { width: '20%' } // xl
    }
  },
  data () {
    return {
      loading_visible: false,
      username: 'userone@justasimpletestok.onmicrosoft.com',
      password: 'SDFjpioz234238nzj'
    }
  }
}
</script>

<style>
  .bg-image {
   background-image: linear-gradient(135deg, #48A88D 0%, #64E8C3 100%);
  }
</style>
