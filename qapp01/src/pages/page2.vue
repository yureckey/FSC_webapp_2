<template>
  <div>

  <web-map/>

  <div class="bg-image">
    <q-toolbar class="bg-teal-2 text-white">
      <q-btn flat dense icon="map" />
      <q-toolbar-title>
        Spatial Analysis (geographical risks)
      </q-toolbar-title>
      <!-- <q-btn flat round dense icon="apps" class="q-mr-xs" />
      <q-btn flat round dense icon="more_vert" /> -->
    </q-toolbar>

    <div class="q-pa-md row items-start justify-center q-gutter-md">
      <q-card class="my-card">
        <q-card-section horizontal class="q-ml-md q-mt-md">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <q-card-actions vertical class="justify-around">
            <q-btn flat round color="red" icon="favorite" />
            <q-btn flat round color="accent" icon="bookmark" />
            <q-btn flat round color="primary" icon="share" />
          </q-card-actions>
        </q-card-section>
      </q-card>
      <q-separator inset />
    </div>

    <div class="q-pa-md row items-start justify-center q-gutter-md">
      <!-- <q-knob
        :step="25"
        v-model="cpivalue"
        show-value
        readonly
        size="90px"
        :thickness="0.22"
        color="orange"
        track-color="orange-3"
        class="text-orange q-ma-md"
      /> -->

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

      <!-- <q-card class="my-card">
        <q-card-section class="bg-purple text-white">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-actions align="around">
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card> -->

      <!-- <q-card class="my-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-overline">Overline</div>
            <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
            <div class="text-caption text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </q-card-section>

          <q-card-section class="col-5 flex flex-center">
            TEXTIK
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn flat round icon="event" />
          <q-btn flat>
            7:30PM
          </q-btn>
          <q-btn flat color="primary">
            Reserve
          </q-btn>
        </q-card-actions>
      </q-card> -->

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

      <!-- <q-badge color="secondary">
        Highly corrupt
      </q-badge>
      <q-badge color="secondary">
        Very clean
      </q-badge>
      <q-slider
        v-model="sliderX"
        color="orange"
        label
        label-always
        markers
        readonly
        :min="0"
        :max="100"
      /> -->

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
    <div v-if='test1' class="q-pa-md q-gutter-sm">
      <q-banner rounded class="bg-purple-8 text-white">
        High Risk - Forest deforestaion spots intersection detected!
      </q-banner>
    </div>
    <div v-if='test2' class="q-pa-md">
      <q-banner rounded class="bg-purple-8 text-white">
        High Risk - COVID19 travel risks
      </q-banner>
    </div>
  </div>

  <q-inner-loading :showing="map_loading_visible">
      <!-- <q-spinner-gears size="50px" color="primary" /> -->
      <q-spinner-grid size="70px" color="primary" />
  </q-inner-loading>

  <q-page-sticky position="bottom-left" :offset="[18, 18]">
    <q-btn fab icon="chevron_left" color="secondary" :to="{ name: 'page1' }" />
  </q-page-sticky>
  <q-page-sticky position="bottom-left" :offset="[(18+60), 18]">
    <q-btn fab icon="chevron_right" color="secondary" :to="{ name: 'page3' }" />
  </q-page-sticky>

  </div>
</template>

<script>
import WebMap from 'components/WebMap.vue'
/* Automatic flag should be given to CoC-companies located
in countries with Corruption Perception Index 2019 <50.
CB should be able to filter company inputs by these flags.
At the same time, the app would overlay location of the company sites with geographical risks steaming from:
- Company location (as per check-list input in App 1).
- Neighboring deforestation (the closer to a deforestation cluster, the higher the risk)
- COVID-19 travel risks (with high risk of infection, the app should discourage auditors from performing
physical audit, even if other conditions speak for it, and the audit would have to be postponed).
The company sites located within deforestation spots are high risk for credibility and
higher risk for remote audit option. */
export default {
  components: { WebMap },
  data () {
    return {
      map_loading_visible: true,
      tab: 'one',
      tab1: 'one',
      tabCovid: 'one',
      tabEQ: 'one',
      sliderX: 35,
      cpivalue: 34,
      deforestationRange: 10,
      test1: false,
      test2: false
    }
  },
  created: function () {
    console.log('created')
    var that = this
    this.$root.$on('all_layers_loaded', function () {
      console.log('on all_layers_loaded')
      that.map_loading_visible = false
    })
  },
  mounted: function () {
    console.log('mounted')
  },
  beforeDestroy: function () {
    console.log('beforeDestroy')
  },

  name: 'Page2webmap'
}
</script>

<style scoped>
.my-card >>> {
  width: 100%;
  max-width: 310px;
}

.animatedWarning >>> {
  animation: headShake;
  /*bounce ?
  flash
  pulse - not working
  rubberBand
  shakeX
  shakeY
  headShake ?
  swing
  tada
  wobble
  jello
  heartBeat
  */
  animation-duration: 5s;
  animation-iteration-count: 2;
}

.bg-image >>> {
  background-image: linear-gradient(135deg, rgba(229,237,251,1) 0%, rgba(144,188,231,1) 100%);
}
</style>
