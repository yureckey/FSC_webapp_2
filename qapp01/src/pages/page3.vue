<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex column bg-image flex-center">

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
          <div class="text-h6">Final Decision</div>
          <div class="text-subtitle2">documents here</div>
        </q-card-section>

        <q-card-actions vertical align="center">
          <q-btn @click="goDocusign">Go Docusign</q-btn>
        </q-card-actions>
      </q-card>
      <!-- <q-separator inset /> -->
    </div>

    <q-dialog v-model="testDialog" full-width full-height>
      <q-card>
          <iframe id="docusign" title="docusign" src="https://copper-forest-saltopus.glitch.me" style="width:100%; height:98%;"></iframe>
      </q-card>
    </q-dialog>

      </q-page>
    </q-page-container>

  <q-page-sticky position="bottom-left" :offset="[18, 18]">
    <q-btn fab icon="chevron_left" color="secondary" :to="{ name: 'page2' }" />
  </q-page-sticky>

  </q-layout>

</template>

<script>

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
  methods: {
    goDocusign: function () {
      console.log('godocusign')
      this.testDialog = true
    }
  },
  data () {
    return {
      testDialog: false,
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

  },
  mounted: function () {
    console.log('mounted')
  },
  beforeDestroy: function () {
    console.log('beforeDestroy')
  },

  name: 'Page3'
}
</script>

<style scoped>
.my-card >>> {
  width: 100%;
  max-width: 310px;
}
.bg-image {
  background-image: linear-gradient(135deg, #48A88D 0%, #64E8C3 100%);
}
</style>
