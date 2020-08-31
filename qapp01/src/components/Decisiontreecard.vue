<template>
  <q-card class="my-card">
    <q-tabs v-model="tabCovid1" class="text-teal" no-caps>
      <q-tab :label="label" name="one"/>
      <q-tab name="two" icon="feedback"/>
    </q-tabs>

    <q-separator/>

    <!-- transition-prev="fade" transition-next="fade" -->
    <q-tab-panels v-model="tabCovid1" animated>
      <q-tab-panel name="one">
        <q-card-section class="q-pa-none">

          <q-stepper
              v-model="step"
              header-nav
              ref="stepper"
              color="primary"
              animated
              alternative-labels
              contracted
          >
<!--            <q-step :name="1" title="step 1" icon="filter_1">-->
<!--              <dtreestep :toggle1="toggle1"/>-->
<!--            </q-step>-->

<!--            <q-step-->
<!--              v-for="(item, index) in q_a_c_data"-->
<!--              :item="item"-->
<!--              :index="index"-->
<!--              :key="index"-->
<!--              :name="index" :title="'step'+index" icon="'filter_'+index"-->
<!--            >-->
<!--&lt;!&ndash;              {{item[0].questiontext}}&ndash;&gt;-->
<!--              <dtreestep :q_a_c_data="item"/>-->
<!--            </q-step>-->
            <q-step :name="1" title="step 1" icon="filter_1" :done="done1">
              <dtreestep :toggle1="toggle1"/>
            </q-step>

            <q-step
              :name="2"
              title="step 2"
              caption="Optional"
              icon="filter_2"
              :done="done2"
            >
              <div>Do you outsource any production activities related to your FSC materials?</div>
              <hr>
              <q-toggle
                size="lg" v-model="toggle1"
                :label="toggle1"
                checked-icon="check"
                unchecked-icon="clear"
                false-value="No"
                true-value="Yes"
                disable
              />
              <hr>
              <div>
                Is any of the below true for you and your contractors?
                a) you outsource all or most of the manufacturing processes of a product; or
                b) your contractor(s) mixes different input materials (e.g. FSC 100%, controlled material, FSC
                controlled wood); or
                c) your contractor(s) applies the FSC label to the product; or
                d) your contractor(s) does not physically return the FSC certified product to you after outsourcing; or
                e) activities are outsourced to a contractor in another country with a Transparency International
                Corruption Perception Index (CPI) lower than 50.
              </div>
              <q-toggle
                size="lg" v-model="toggle1"
                :label="toggle1"
                checked-icon="check"
                unchecked-icon="clear"
                false-value="No"
                true-value="Yes"
                disable
              />
              <hr>
              <div>Did you have any problems or non-conformities by your contractors regarding mixing different material
                groups or you otherwise think that there may be some problems?
              </div>
              <q-toggle
                size="lg" v-model="toggle1"
                :label="toggle1"
                checked-icon="check"
                unchecked-icon="clear"
                false-value="No"
                true-value="Yes"
                disable
              />

            </q-step>

            <q-step
              :name="3"
              title="step 3"
              icon="filter_3"
              :done="done3"
            >
              <div>Try out different ad text to see what brings in the most customers, and learn how to
                enhance your ads using features like ad extensions. If you run into any problems with
                your ads, find out how to tell if they're running and how to resolve approval issues.
              </div>
              <q-toggle
                size="lg" v-model="toggle1"
                :label="toggle1"
                checked-icon="check"
                unchecked-icon="clear"
                false-value="No"
                true-value="Yes"
                disable
              />
            </q-step>

            <q-step
              :name="4"
              title="step 4"
              icon="filter_4"
              :done="done3"
            >
              <div>Try out different ad text to see what brings in the most customers, and learn how to
                enhance your ads using features like ad extensions. If you run into any problems with
                your ads, find out how to tell if they're running and how to resolve approval issues.
              </div>
              <q-toggle
                size="lg" v-model="toggle1"
                :label="toggle1"
                checked-icon="check"
                unchecked-icon="clear"
                false-value="No"
                true-value="Yes"
                disable
              />
            </q-step>

            <q-step
              :name="5"
              title="step 5"
              icon="filter_5"
              :done="done3"
            >
              <div>Try out different ad text to see what brings in the most customers, and learn how to
                enhance your ads using features like ad extensions. If you run into any problems with
                your ads, find out how to tell if they're running and how to resolve approval issues.
              </div>
              <q-toggle
                size="lg" v-model="toggle1"
                :label="toggle1"
                checked-icon="check"
                unchecked-icon="clear"
                false-value="No"
                true-value="Yes"
                disable
              />
            </q-step>

            <q-step
              :name="6"
              title="step 6"
              icon="filter_6"
              :done="done3"
            >
              <div>Try out different ad text to see what brings in the most customers, and learn how to
                enhance your ads using features like ad extensions. If you run into any problems with
                your ads, find out how to tell if they're running and how to resolve approval issues.
              </div>
              <q-toggle
                size="lg" v-model="toggle1"
                :label="toggle1"
                checked-icon="check"
                unchecked-icon="clear"
                false-value="No"
                true-value="Yes"
                disable
              />
            </q-step>
          </q-stepper>

        </q-card-section>

        <q-card-section class="q-mt-sm bg-orange-14 text-white rounded-borders text-center text-bold animatedWarning">
          <!-- <q-card-section class="bg-teal-14 text-white rounded-borders text-center text-bold"> -->
          High risk!&nbsp;&nbsp;&nbsp;<q-icon name="flag" class="text-red bg-deep-orange-2 rounded-borders"
                                              style="font-size: 2rem;"/>
        </q-card-section>
      </q-tab-panel>

      <q-tab-panel name="two">
        <div>
          <q-editor v-model="editor" min-height="10rem"/>
        </div>
        <br>
        <div class="q-gutter-sm">
          <q-btn-toggle
              v-model="togglemodel"
              push
              no-caps
              dense
              toggle-color="secondary"
              :options="[{value: 'green', slot:'green'},{value: 'yellow', slot:'yellow'},{value: 'red',  slot:'red'}]"
          >
            <template v-slot:green>
              <div class="row items-center no-wrap">
                <q-icon center color="green" name="flag"/>
              </div>
            </template>

            <template v-slot:yellow>
              <div class="row items-center no-wrap">
                <q-icon center color="yellow" name="flag"/>
              </div>
            </template>

            <template v-slot:red>
              <div class="row items-center no-wrap">
                <q-icon center color="red" name="flag"/>
              </div>
            </template>
          </q-btn-toggle>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
import Dtreestep from 'components/Dtreestep'

export default {
  name: 'decisiontreecard',
  components: { Dtreestep },
  props: {
    q_a_c_data: {},
    done1: {},
    done2: {},
    done3: {},
    editor: {},
    step: {},
    tabCovid1: {},
    toggle1: {},
    togglemodel: {},
    label: {}
  },
  mounted () {
    console.log('decisiontreecard mounted', this.q_a_c_data)
  },
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>
<style scoped>

.my-card >>> {
  width: 100%;
  max-width: 370px;
}

</style>
