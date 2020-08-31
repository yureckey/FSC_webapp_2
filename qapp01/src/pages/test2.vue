<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <!-- <q-btn label="Reset" push color="white" text-color="primary" @click="reset" class="q-mb-md" /> -->

      <q-stepper
        v-model="step"
        header-nav
        ref="stepper"
        color="primary"
        animated
        transition-prev="fade" transition-next="fade"
      >
        <q-step
          :name="1"
          title="Title step One"
          caption="caption for step one"
          icon="rule"
          :done="done1"
        >
        <div class="bigStepperDiv">
          For each ad campaign that you create, you can control how much you're willing to
          spend on clicks and conversions, which networks and geographical locations you want
          your ads to show on, and more.</div>

          <q-stepper-navigation>
            <q-btn @click="() => { done1 = true; step = 2 }" color="primary" label="Continue" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title="Title step Two"
          caption="caption for step Two"
          icon="map"
          :done="done2"
        >
          <div class="bigStepperDiv">
            <web-map />
          </div>

          <q-stepper-navigation>
            <q-btn @click="() => { done2 = true; step = 3 }" color="primary" label="Continue" />
            <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>

        <q-step :name="3" title="Title step Three" caption="caption for step three" icon="thumbs_up_down" :done="done3">
    <div class="bigStepperDiv">
    <div class="q-pa-md row items-start justify-center q-gutter-md">

      <q-card class="my-card">
        <q-tabs v-model="tab1" class="text-teal" no-caps>
          <q-tab label="Neighboring deforestation" name="one" />
          <q-tab name="two" icon="settings_applications"/>
        </q-tabs>

        <q-separator />

        <!-- transition-prev="fade" transition-next="fade" -->
        <q-tab-panels v-model="tab1" animated>
          <q-tab-panel name="one">
            <q-card-section class="q-pt-none">

            </q-card-section>
            <q-card-section class="bg-orange-14 text-white rounded-borders text-center text-bold animatedWarning">
              <!-- <q-card-section class="bg-teal-14 text-white rounded-borders text-center text-bold"> -->
              Intersection Detected. High risk!&nbsp;&nbsp;&nbsp;<q-icon name="flag" class="text-red bg-deep-orange-2 rounded-borders" style="font-size: 2rem;" />
            </q-card-section>
          </q-tab-panel>

          <q-tab-panel name="two">
            Deforestion data provided by FSC. Calculations performed to check if there are any intersections with applicant company sites (polygon data). Default tolerance is 10 km. Default weight in overall risks estimation is 10%.<br>
            <q-knob
              :step="1"
              v-model="deforestationRange"
              show-value
              size="70px"
              :thickness="0.22"
              color="orange"
              track-color="orange-3"
              class="text-orange q-ma-md"
              :min="1"
              :max="200"
            >{{ deforestationRange }} km</q-knob>
            <q-knob
              :step="5"
              v-model="cpivalue"
              show-value
              size="70px"
              :thickness="0.22"
              color="orange"
              track-color="orange-3"
              class="text-orange q-ma-md"
            >{{ cpivalue }} %</q-knob>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>

      <q-card class="my-card">
        <q-tabs v-model="tabCovid" class="text-teal" no-caps>
          <q-tab label="COVID-19 travel risks" name="one" />
          <q-tab name="two" icon="settings_applications"/>
        </q-tabs>

        <q-separator />

        <!-- transition-prev="fade" transition-next="fade" -->
        <q-tab-panels v-model="tabCovid" animated>
          <q-tab-panel name="one">
            <q-card-section class="q-pt-none">

            </q-card-section>
            <q-card-section class="bg-orange-14 text-white rounded-borders text-center text-bold animatedWarning">
              <!-- <q-card-section class="bg-teal-14 text-white rounded-borders text-center text-bold"> -->
              COVID-19! High risk!&nbsp;&nbsp;&nbsp;<q-icon name="flag" class="text-red bg-deep-orange-2 rounded-borders" style="font-size: 2rem;" />
            </q-card-section>
          </q-tab-panel>

          <q-tab-panel name="two">
            Default weight in overall risks estimation is 10%.<br>
            <q-knob
              :step="5"
              v-model="cpivalue"
              show-value
              size="70px"
              :thickness="0.22"
              color="orange"
              track-color="orange-3"
              class="text-orange q-ma-md"
            >{{ cpivalue }} %</q-knob>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>

      <q-card class="my-card">
        <!-- <q-card-section> -->
          <!-- <div class="text-h6">Our Changing Planet</div> -->
          <!-- <div class="text-subtitle2">by John Doe</div> -->
        <!-- </q-card-section> -->

        <q-tabs v-model="tab" class="text-teal" no-caps>
          <q-tab label="Corruption Perception Index" name="one" />
          <q-tab name="two" icon="settings_applications"/>
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="one">
            <q-card-section class="q-pt-none">
              <q-badge color="red-14">
                0 – Highly<br>corrupt
              </q-badge>
              <q-badge floating color="yellow-2" text-color="black" style="margin-right:15px; margin-top:7px;">
                100 – Very<br>clean
              </q-badge>
              <q-slider
                v-model="sliderX"
                color="orange"
                label
                label-always
                readonly
                :min="0"
                :max="100"
              />
            </q-card-section>
            <q-card-section class="bg-orange-14 text-white rounded-borders text-center text-bold animatedWarning">
              Brazil score &lt; 50. High risk!&nbsp;&nbsp;&nbsp;<q-icon name="flag" class="text-red bg-deep-orange-2 rounded-borders" style="font-size: 2rem;" />
            </q-card-section>
          </q-tab-panel>

          <q-tab-panel name="two">
            CPI is something and something.<br>
            Default weight in overall risks estimation is 10%, you can change it here<br>
            <q-knob
              :step="5"
              v-model="cpivalue"
              show-value
              size="70px"
              :thickness="0.22"
              color="orange"
              track-color="orange-3"
              class="text-orange q-ma-md"
            />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>

      <q-card class="my-card">
        <q-tabs v-model="tabEQ" class="text-teal" no-caps>
          <q-tab label="COVID-19 travel risks" name="one" />
          <q-tab name="two" icon="settings_applications"/>
        </q-tabs>

        <q-separator />

        <!-- transition-prev="fade" transition-next="fade" -->
        <q-tab-panels v-model="tabEQ" animated>
          <q-tab-panel name="one">
            <q-card-section class="q-pt-none">

            </q-card-section>
            <q-card-section class="bg-teal-14 text-white rounded-borders text-center text-bold">
              Earh quakes - no risk
            </q-card-section>
          </q-tab-panel>

          <q-tab-panel name="two">
            Default weight in overall risks estimation is 10%.<br>
            <q-knob
              :step="5"
              v-model="cpivalue"
              show-value
              size="70px"
              :thickness="0.22"
              color="orange"
              track-color="orange-3"
              class="text-orange q-ma-md"
            >{{ cpivalue }} %</q-knob>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>

    <div class="q-pa-md row items-start justify-center q-gutter-md">
      <q-card class="my-card">
        <q-card-section class="bg-grey-8 text-white">
          <div class="text-h6">header here</div>
          <div class="text-subtitle2">subtitle here</div>
        </q-card-section>

        <q-card-actions vertical align="center">
          <q-btn>Go Docusign</q-btn>
        </q-card-actions>
      </q-card>
      <!-- <q-separator inset /> -->
    </div>
    </div>
          <q-stepper-navigation>
            <!-- <q-btn color="primary" @click="done3 = true" label="Finish" /> -->
            <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </div>
  </q-page>
</template>

<script>

import WebMap from 'components/WebMap.vue'

export default {
  components: { WebMap },
  data () {
    return {
      //
      testDialog: false,
      tab: 'one',
      tab1: 'one',
      tabCovid: 'one',
      tabEQ: 'one',
      sliderX: 35,
      cpivalue: 34,
      deforestationRange: 10,
      test1: false,
      test2: false,
      //
      step: 1,
      done1: false,
      done2: false,
      done3: false
    }
  },
  methods: {
    reset () {
      this.done1 = false
      this.done2 = false
      this.done3 = false
      this.step = 1
    }
  },
  created: function () {
  },
  mounted: function () {
    console.log('mounted')
  },
  beforeDestroy: function () {
    console.log('beforeDestroy')
  },

  name: 'test2'
}
</script>

<style scoped>
.bigStepperDiv {
  width:80vw;
  height:calc(100vh - 300px);
}
</style>
