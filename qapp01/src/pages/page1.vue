<template>
<q-page class="q-pa-sm bg-teal-1">

  <div class="q-ma-md q-mx-xl">Decision Tree</div>
  <hr class="q-mx-xl">
  <div class="q-ma-md"></div>
  <div class="q-pa-md row items-start q-gutter-md">

    <!-- CARD BEGIN -->
    <decisiontreecard
      :done1="done1" :done2="done2" :done3="done3" :editor="editor" :step="step" :tab-covid1="tabCovid1"
                  :toggle1="toggle1" :togglemodel="togglemodel" label="Filter Level I" />
    <!-- CARD END -->

    <!-- CARD BEGIN -->
<!--    <decisiontreecard-->
<!--      :q_a_c_data="decisiontree_q_a_c_manual['Filter Level I']"-->
<!--      :done1="done1" :done2="done2" :done3="done3" :editor="editor" :step="step" :tab-covid1="tabCovid1"-->
<!--      :toggle1="toggle1" :togglemodel="togglemodel" label="Filter Level I" />-->
    <!-- CARD END -->

    <!-- CARD BEGIN -->
    <q-card class="my-card">
      <q-tabs v-model="tabCovid1" class="text-teal" no-caps>
        <q-tab label="Filter Level II" name="one" />
        <q-tab name="two" icon="feedback"/>
      </q-tabs>

      <q-separator />

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
              <q-step
                :name="1"
                title="step 1"
                icon="filter_1"
                :done="done1"
              >
                <div>For each ad campaign that you create, you can control how much you're willing to
                spend on clicks and conversions, which networks and geographical locations you want
                your ads to show on, and more.</div>
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
                :name="2"
                title="step 2"
                caption="Optional"
                icon="filter_2"
                :done="done2"
              >
                <div>
                  Is any of the below true for you and your contractors?
                  a) you outsource all or most of the manufacturing processes of a product; or
                  b) your contractor(s) mixes different input materials (e.g. FSC 100%, controlled material, FSC controlled wood); or
                  c) your contractor(s) applies the FSC label to the product; or
                  d) your contractor(s) does not physically return the FSC certified product to you after outsourcing; or
                  e) activities are outsourced to a contractor in another country with a Transparency International Corruption Perception Index (CPI) lower than 50.
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
                your ads, find out how to tell if they're running and how to resolve approval issues.</div>
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
                your ads, find out how to tell if they're running and how to resolve approval issues.</div>
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
                your ads, find out how to tell if they're running and how to resolve approval issues.</div>
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
                your ads, find out how to tell if they're running and how to resolve approval issues.</div>
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
          <!-- <q-card-section class="q-mt-sm bg-orange-14 text-white rounded-borders text-center text-bold animatedWarning"> -->
            <q-card-section class="q-mt-sm bg-teal-14 text-white rounded-borders text-center text-bold">
            Low risk
          </q-card-section>
        </q-tab-panel>

        <q-tab-panel name="two">
          <div>
            <q-editor v-model="editor" min-height="10rem" />
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
                  <q-icon center color="green" name="flag" />
                </div>
              </template>

              <template v-slot:yellow>
                <div class="row items-center no-wrap">
                  <q-icon center color="yellow" name="flag" />
                </div>
              </template>

              <template v-slot:red>
                <div class="row items-center no-wrap">
                  <q-icon center color="red" name="flag" />
                </div>
              </template>
            </q-btn-toggle>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
    <!-- CARD END -->

    <!-- CARD BEGIN -->
    <q-card class="my-card">
      <q-tabs v-model="tabCovid1" class="text-teal" no-caps>
        <q-tab label="Filter Level III" name="one" />
        <q-tab name="two" icon="feedback"/>
      </q-tabs>

      <q-separator />

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
              <q-step
                :name="1"
                title="step 1"
                icon="filter_1"
                :done="done1"
              >
                <div>For each ad campaign that you create, you can control how much you're willing to
                spend on clicks and conversions, which networks and geographical locations you want
                your ads to show on, and more.</div>
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
                :name="2"
                title="step 2"
                caption="Optional"
                icon="filter_2"
                :done="done2"
              >
                <div>
                  Is any of the below true for you and your contractors?
                  a) you outsource all or most of the manufacturing processes of a product; or
                  b) your contractor(s) mixes different input materials (e.g. FSC 100%, controlled material, FSC controlled wood); or
                  c) your contractor(s) applies the FSC label to the product; or
                  d) your contractor(s) does not physically return the FSC certified product to you after outsourcing; or
                  e) activities are outsourced to a contractor in another country with a Transparency International Corruption Perception Index (CPI) lower than 50.
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
                your ads, find out how to tell if they're running and how to resolve approval issues.</div>
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
                your ads, find out how to tell if they're running and how to resolve approval issues.</div>
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
                your ads, find out how to tell if they're running and how to resolve approval issues.</div>
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
                your ads, find out how to tell if they're running and how to resolve approval issues.</div>
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
            High risk!&nbsp;&nbsp;&nbsp;<q-icon name="flag" class="text-red bg-deep-orange-2 rounded-borders" style="font-size: 2rem;" />
          </q-card-section>
        </q-tab-panel>

        <q-tab-panel name="two">
          <div>
            <q-editor v-model="editor" min-height="10rem" />
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
                  <q-icon center color="green" name="flag" />
                </div>
              </template>

              <template v-slot:yellow>
                <div class="row items-center no-wrap">
                  <q-icon center color="yellow" name="flag" />
                </div>
              </template>

              <template v-slot:red>
                <div class="row items-center no-wrap">
                  <q-icon center color="red" name="flag" />
                </div>
              </template>
            </q-btn-toggle>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
    <!-- CARD END -->

    <!-- CARD BEGIN -->
    <q-card class="my-card">
      <q-tabs v-model="tabCovid1" class="text-teal" no-caps>
        <q-tab label="Additional Questions" name="one" />
        <q-tab name="two" icon="feedback"/>
      </q-tabs>

      <q-separator />

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
              <q-step
                :name="1"
                title="step 1"
                icon="filter_1"
                :done="done1"
              >
                <div>For each ad campaign that you create, you can control how much you're willing to
                spend on clicks and conversions, which networks and geographical locations you want
                your ads to show on, and more.</div>
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
                :name="2"
                title="step 2"
                caption="Optional"
                icon="filter_2"
                :done="done2"
              >
                <div>
                  Is any of the below true for you and your contractors?
                  a) you outsource all or most of the manufacturing processes of a product; or
                  b) your contractor(s) mixes different input materials (e.g. FSC 100%, controlled material, FSC controlled wood); or
                  c) your contractor(s) applies the FSC label to the product; or
                  d) your contractor(s) does not physically return the FSC certified product to you after outsourcing; or
                  e) activities are outsourced to a contractor in another country with a Transparency International Corruption Perception Index (CPI) lower than 50.
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
                your ads, find out how to tell if they're running and how to resolve approval issues.</div>
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
                your ads, find out how to tell if they're running and how to resolve approval issues.</div>
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
                your ads, find out how to tell if they're running and how to resolve approval issues.</div>
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
                your ads, find out how to tell if they're running and how to resolve approval issues.</div>
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
            High risk!&nbsp;&nbsp;&nbsp;<q-icon name="flag" class="text-red bg-deep-orange-2 rounded-borders" style="font-size: 2rem;" />
          </q-card-section>
        </q-tab-panel>

        <q-tab-panel name="two">
          <div>
            <q-editor v-model="editor" min-height="10rem" />
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
                  <q-icon center color="green" name="flag" />
                </div>
              </template>

              <template v-slot:yellow>
                <div class="row items-center no-wrap">
                  <q-icon center color="yellow" name="flag" />
                </div>
              </template>

              <template v-slot:red>
                <div class="row items-center no-wrap">
                  <q-icon center color="red" name="flag" />
                </div>
              </template>
            </q-btn-toggle>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
    <!-- CARD END -->

    <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <q-card-section>
        <div class="text-h6">Likelihood of remote audit eligibility</div>
        <div class="text-subtitle2">todo</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>

  </div>

  <div class="q-ma-md"></div>
  <hr class="q-mx-xl">
  <div class="q-ma-md"></div>

  <div class="q-ma-md q-mx-xl">Company Applicant input to Requirement Standards</div>
  <div class="q-ma-md"></div>

    <q-card>
      <q-table
        title="dummy data"
        :data="data"
        :hide-header="mode === 'grid'"
        :columns="columns"
        row-key="name"
        :grid="mode=='grid'"
        :filter="filter"
        :pagination.sync="pagination"
      >

        <template v-slot:top-right="props">
          <q-input outlined dense debounce="500" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search"/>
            </template>
          </q-input>

          <q-btn flat round dense :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'" @click="props.toggleFullscreen" v-if="mode === 'list'">
            <q-tooltip
              :disable="$q.platform.is.mobile"
              v-close-popup
            >{{props.inFullscreen ? 'Exit Fullscreen' : 'Toggle Fullscreen'}}
            </q-tooltip>
          </q-btn>

          <q-btn
            flat
            round
            dense
            :icon="mode === 'grid' ? 'list' : 'grid_on'"
            @click="mode = mode === 'grid' ? 'list' : 'grid'; separator = mode === 'grid' ? 'none' : 'horizontal'"
            v-if="!props.inFullscreen"
          >
            <q-tooltip
              :disable="$q.platform.is.mobile"
              v-close-popup
            >{{mode==='grid' ? 'List' : 'Grid'}}
            </q-tooltip>
          </q-btn>
        </template>

        <template v-slot:body-cell-detail="props">
          <q-td :props="props">
            {{ props.row.details }}
            <q-btn @click="employee_dialog=true" dense round color="secondary" icon="pageview"/>
          </q-td>
        </template>

        <template v-slot:body-cell-name="props">
          <q-td :props="props">
            <div>
              <q-badge color="purple" :label="props.value" />
            </div>
            <div class="my-table-details">
              {{ props.row.details }}
            </div>
          </q-td>
        </template>

        <template v-slot:body-cell-action="props">
          <q-td :props="props">
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
                    <q-icon center color="green" name="flag" />
                  </div>
                </template>

                <template v-slot:yellow>
                  <div class="row items-center no-wrap">
                    <q-icon center color="yellow" name="flag" />
                  </div>
                </template>

                <template v-slot:red>
                  <div class="row items-center no-wrap">
                    <q-icon center color="red" name="flag" />
                  </div>
                </template>
              </q-btn-toggle>
            </div>
          </q-td>
        </template>
      </q-table>
    </q-card>

    <div style="height:80px;"></div>

    <q-dialog v-model="employee_dialog">
      <q-card class="my-card" flat bordered>
        <q-card-section>
          <div class="text-h6">
            Details
            <q-btn round flat dense icon="close" class="float-right" color="grey-8" v-close-popup></q-btn>
          </div>
        </q-card-section>
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-overline">US Region</div>
            <div class="text-h5 q-mt-sm q-mb-xs">testing</div>
            <div class="text-caption text-grey">
              testing
            </div>
          </q-card-section>

          <q-card-section class="col-5 flex flex-center">
            <q-img
              class="rounded-borders"
              src="https://cdn.quasar.dev/img/boy-avatar.png"
            />
          </q-card-section>
        </q-card-section>

        <q-separator/>

        <q-card-section>
          something something something
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-page-sticky position="bottom-left" :offset="[18, 18]">
      <q-btn fab icon="chevron_right" color="secondary" :to="{ name: 'page2' }" />
    </q-page-sticky>

    <q-inner-loading :showing="loading_visible">
        <!-- <q-spinner-gears size="50px" color="primary" /> -->
        <q-spinner-grid size="4em" color="primary" />
    </q-inner-loading>

  </q-page>
</template>

<script>
import Axios from 'axios'
import Decisiontreecard from 'components/Decisiontreecard'

/*
(app1) Through this interface, a CoC-company (either already certified or applying for the certification) would have an
access to a digital checklist with all applicable for them FSC requirements and could provide description of how do
they comply with these requirements, as well as attach the evidence supporting the compliance (e.g. scan of invoices,
delivery notes, worker’s gender balance sheets etc.). This is what we call self-assessment.

app 2 will further process the information and capture additional notes from CBs (comments and flags) agains requirements captured from the company.
app 2 will add further intelligence to the data by doing the spatial analysis
system will produce the conditions to assess the credibility and allow only low or medium risk cases for a remote audit

"Comment and flag" + "Spatial Analysis" = "Visualize Risk Levels" => Decide & Sign

Pre-assess eligibility for remote audit (from app1):
Before going to a potentially demanding work of self-assessment, a CoC-company would like to know whether they would qualify
for a remote audit or not. Otherwise, they may do all the preassessment work for nothing and get disappointed. Actual eligibility
would be confirmed further in the process by CB, in App 2.
Digital checklist should provide CoC company with the possibility to describe how are they complying in every single requirement.
The information they provide should be stored in DB, and later visible for CB.

Additional questions about company that will go deeper in explore whether they are eligible for remote audit.
Answers to these questions will be used later by CBs in app 2. FSC will provide you with these additional questions.
See resource 5: Additional questions for assessing remote option eligibility (R.5 Additional_questions_for_assessing.pdf)
NOTE: You will need to develop the schema for this additional data and align it with the FSC certificate management schema and FSC requirement schema.
*/

export default {
  components: { Decisiontreecard },
  // todo: move to boot?
  created: function () {
    console.log('created')
    console.log('this.$root.$data: ', this.$root.$data)

    // had to disable - trial is over
    // window.RocketChat = function (c) { window.RocketChat._.push(c) }
    // window.RocketChat._ = []
    // window.RocketChat.url = 'https://workspace20200814.rocket.chat/livechat'
    // var h = document.getElementsByTagName('script')[0]
    // var j = document.createElement('script')
    // j.async = true
    // j.src = 'https://workspace20200814.rocket.chat/livechat/rocketchat-livechat.min.js?_=' + Math.random()
    // h.parentNode.insertBefore(j, h)
  },
  mounted: function () {
    console.log('mounted')
    console.log('this.$root.$data: ', this.$root.$data)

    if (!this.$root.$data.access_token) {
      this.$q.notify({
        message: 'no access token detected, please login first',
        color: 'negative',
        icon: 'report_problem',
        position: 'bottom',
        timeout: 3000,
        multiLine: true,
        // avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
        actions: [
          { label: 'Login', color: 'yellow', handler: () => { this.$router.push('login') } }
        ]
      })
    } else {
      this.getQuestions()
    }

    // had to disable - trial is over
    // window.RocketChat(function () {
    //   // this.setCustomField('key1', 'value test1')
    //   // this.setGuestToken('BsJh6juWapdCWE5Rt') // preUser id?
    //   this.setGuestName('selfchecking company')
    //   // this.setGuestEmail('sample@rocket.chat')
    //   this.setAgent({ _id: 'HPrnW34SETGrQuZGP', username: 'user1' })
    //
    //   this.showWidget()
    // })
  },
  beforeDestroy: function () {
    console.log('beforeDestroy')

    // window.RocketChat(function () {
    //   this.hideWidget()
    // })
    // // todo: proper way to clean
    // window.RocketChat = null
  },
  data () {
    return {
      loading_visible: false,
      questions: null,
      cbcomments: null,
      decisiontree: null,
      decisiontree_q_a_c: null, // enhanced decision tree, with questions, answers, comments and flags
      outcome: { arr: [], scenario_abbr_arr: [] },
      // was used during debug process
      outcoume_manual: {
        //
      },
      decisiontree_q_a_c_manual: {
        'Filter Level I': [[{
          questiontext: 'Do you produce products or only trade them?',
          id: 'b95d3c12-70ea-ea11-a817-000d3a1a3603',
          idStr: '1',
          answertype: 2,
          answertext: 'I only trade FSC products',
          outcome: null,
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }, {
          questiontext: 'Do you physically possess these products?',
          id: 'd2056b27-71ea-ea11-a817-000d3a1a3603',
          idStr: '2',
          answertype: 1,
          answertext: 'yes',
          outcome: {
            scenario: 'Traders with physical possession',
            scenario_abbr: 'TDwPP',
            scenario_code: 3
          },
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }
        ]],
        'Filter Level II': [[{
          questiontext: 'Does / would your entire production use FSC materials (as opposite to only part of the production set for FSC and other part not)?',
          id: 'c835e3fa-80ea-ea11-a817-000d3a1a3603',
          idStr: '4',
          answertype: 2,
          answertext: 'Yes, my entire production is/will focus on FSC material',
          outcome: null,
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }, {
          questiontext: 'Do you / would you only sell your products with one of the FSC claims that you have used as your input, or do you / would you calculate your output claims differently?',
          id: 'a7eb8171-82ea-ea11-a817-000d3a1a3603',
          idStr: '5',
          answertype: 2,
          answertext: 'I (would) either calculate a percentage claim that corresponds to the proportion of claim-contributing inputs, or chose a proportion of outputs to be sold with a credit claim corresponding to the quantity of claim-contributing inputs',
          outcome: null,
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }, {
          questiontext: 'Is any of the following true for you? d. print processes e. sale of products with FSC Small and Community Label and/or claim',
          id: 'd62911df-88ea-ea11-a817-000d3a1a3603',
          idStr: '8',
          answertype: 1,
          answertext: 'No',
          outcome: {
            scenario: 'All three control systems/combination of systems',
            scenario_abbr: 'PCT',
            scenario_code: 8
          },
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }
        ]],
        'Filter Level III': [[{
          questiontext: 'Do you outsource any production activities related to your FSC materials?',
          id: 'aaa6399c-8bea-ea11-a817-000d3a1a3603',
          idStr: '11',
          answertype: 1,
          answertext: 'Yes',
          outcome: null,
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }, {
          questiontext: 'Is any of the below true for you and your contractors? a) you outsource all or most of the manufacturing processes of a product; or b) your contractor(s) mixes different input materials (e.g. FSC 100%, controlled material, FSC controlled wood); or c) your contractor(s) applies the FSC label to the product; or d) your contractor(s) does not physically return the FSC certified product to you after outsourcing; or e) activities are outsourced to a contractor in another country with a Transparency International Corruption Perception Index (CPI) lower than 50.',
          id: 'e5bec686-8dea-ea11-a817-000d3a1a3603',
          idStr: '12',
          answertype: 1,
          answertext: 'No',
          outcome: null,
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }, {
          questiontext: 'Did you have any problems or non-conformities by your contractors regarding mixing different material groups or you otherwise think that there may be some problems?',
          id: 'aecedc0a-ceea-ea11-a817-000d3a1a3603',
          idStr: '13',
          answertype: 1,
          answertext: 'Yes',
          outcome: {
            scenario: 'Outsourcing',
            scenario_abbr: 'OUT',
            scenario_code: 12
          },
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }
        ], [{
          questiontext: 'Do you use any recycled materials?',
          id: '4669a71c-ceea-ea11-a817-000d3a1a3603',
          idStr: '14',
          answertype: 1,
          answertext: 'Yes',
          outcome: null,
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }, {
          questiontext: 'Do you only use FSC recycled materials?',
          id: 'fd247532-ceea-ea11-a817-000d3a1a3603',
          idStr: '15',
          answertype: 1,
          answertext: 'No',
          outcome: null,
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }, {
          questiontext: 'Do you/ would you audit your suppliers for the compliance with FSC requirements yourself (as opposite to e.g. using FSC accredited CB)?',
          id: 'f25c4b40-ceea-ea11-a817-000d3a1a3603',
          idStr: '16',
          answertype: 1,
          answertext: 'Yes',
          outcome: null,
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }, {
          questiontext: 'Can you present objective evidence for your classification of the material?',
          id: 'e7fa3054-ceea-ea11-a817-000d3a1a3603',
          idStr: '17',
          answertype: 1,
          answertext: 'Yes',
          outcome: {
            scenario: 'Sourcing recycled material (pre and/or post consumer)',
            scenario_abbr: 'REC',
            scenario_code: 10
          },
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }
        ], [{
          questiontext: 'Do you / would you use any uncertified material that you would like to mix in with certified material (this can happen when you e.g. do not have enough FSC certified material and it means applying additional standards for Mix products FSC-STD-40-005)?',
          id: 'cb91fe9b-ceea-ea11-a817-000d3a1a3603',
          idStr: '19',
          answertype: 1,
          answertext: 'Yes',
          outcome: null,
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }, {
          questiontext: 'Can ensure that you do not mix your uncertified material with non-FSC materials?',
          id: '3c8543a9-ceea-ea11-a817-000d3a1a3603',
          idStr: '20',
          answertype: 1,
          answertext: 'Yes',
          outcome: null,
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }, {
          questiontext: 'Is your uncertified material coming from low risk regions as per FSC risk assessments?',
          id: 'af1d2bbe-ceea-ea11-a817-000d3a1a3603',
          idStr: '21',
          answertype: 1,
          answertext: 'Yes',
          outcome: {
            scenario: 'Sourcing non-certified wood for use in FSC product groups (as CW)',
            scenario_abbr: 'CW',
            scenario_code: 9
          },
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }
        ], [{
          questiontext: 'Is all your operation located just in one physical location?',
          id: 'f7111acd-ceea-ea11-a817-000d3a1a3603',
          idStr: '22',
          answertype: 1,
          answertext: 'No',
          outcome: {
            scenario: 'Group/multi-site certification',
            scenario_abbr: 'MLT',
            scenario_code: 11
          },
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }
        ], [{
          questiontext: 'Do you (would you) label your FSC products with FSC Label?',
          id: 'b144c2d8-ceea-ea11-a817-000d3a1a3603',
          idStr: '23',
          answertype: 1,
          answertext: 'Yes',
          outcome: {
            scenario: 'Labeling products',
            scenario_abbr: 'LAB',
            scenario_code: 13
          },
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }
        ]],
        'Additional Questions': [[{
          questiontext: 'Is your main product chaco?',
          id: 'be4a1bf0-ceea-ea11-a817-000d3a1a3603',
          idStr: '24',
          answertype: 1,
          answertext: 'Yes',
          outcome: null,
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }, {
          questiontext: 'Are you sourcing from either Ukraine, Romania, or Africa?',
          id: '71d43600-cfea-ea11-a817-000d3a1a3603',
          idStr: '25',
          answertype: 1,
          answertext: 'No',
          outcome: {
            condition: 'All scenarios with traders',
            res: 'RISK',
            RISK: 'LOW'
          },
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }
        ], [{
          questiontext: 'Is your main product plywood?',
          id: 'ca7a630b-cfea-ea11-a817-000d3a1a3603',
          idStr: '26',
          answertype: 1,
          answertext: 'Yes',
          outcome: null,
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }, {
          questiontext: 'Are you sourcing from either south east Asia or China?',
          id: '043d3023-cfea-ea11-a817-000d3a1a3603',
          idStr: '27',
          answertype: 1,
          answertext: 'No',
          outcome: {
            condition: 'All scenarios with traders',
            res: 'RISK',
            RISK: 'LOW'
          },
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }
        ], [{
          questiontext: 'Do you use Mango wood?',
          id: '98ed9131-cfea-ea11-a817-000d3a1a3603',
          idStr: '28',
          answertype: 1,
          answertext: 'Yes',
          outcome: null,
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }, {
          questiontext: 'Do you source it from India?',
          id: '4e124e3e-cfea-ea11-a817-000d3a1a3603',
          idStr: '29',
          answertype: 1,
          answertext: 'No',
          outcome: {
            condition: 'All scenarios with traders',
            res: 'RISK',
            RISK: 'LOW'
          },
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }
        ], [{
          questiontext: 'Do you use Dalbergia wood?',
          id: 'c1809249-cfea-ea11-a817-000d3a1a3603',
          idStr: '30',
          answertype: 1,
          answertext: 'Yes',
          outcome: null,
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }, {
          questiontext: 'Do you source it from India?',
          id: '4e124e3e-cfea-ea11-a817-000d3a1a3603',
          idStr: '29',
          answertype: 1,
          answertext: 'No',
          outcome: {
            condition: 'All scenarios with traders',
            res: 'RISK',
            RISK: 'LOW'
          },
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }
        ], [{
          questiontext: 'Do you use Paulownia wood?',
          id: '4789aa57-cfea-ea11-a817-000d3a1a3603',
          idStr: '31',
          answertype: 1,
          answertext: 'Yes',
          outcome: null,
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }, {
          questiontext: 'Do you source it from China?',
          id: 'faeab563-cfea-ea11-a817-000d3a1a3603',
          idStr: '32',
          answertype: 1,
          answertext: 'No',
          outcome: {
            condition: 'All scenarios with traders',
            res: 'RISK',
            RISK: 'LOW'
          },
          comment: {
            id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
            name: 'test cb1',
            autoflag: {
              flag: 'something'
            },
            manualflag: {
              red: true
            },
            cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
            comment: {
              data: 'update here!'
            }
          }
        }
        ]]
      },
      decisiontree_manual: {
        id: 'd5f035ba-d6ea-ea11-a817-000d3a1a3603',
        applicantorg_id: 'd8c91362-e6e9-ea11-a817-000d3a1a3603',
        cbcomment_id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603',
        name: 'test',
        data: {
          'Filter Level I': [[{ q: 1, a: 0 }, { q: 2, a: 0 }]],
          'Filter Level II': [[{ q: 4, a: 0 }, { q: 5, a: 1 }, { q: 8, a: 1, case: 1 }]],
          'Filter Level III': [[{ q: 11, a: 0 }, { q: 12, a: 1 }, { q: 13, a: 0 }], [{ q: 14, a: 0 }, { q: 15, a: 1 }, { q: 16, a: 0 }, { q: 17, a: 0 }], [{ q: 19, a: 0 }, { q: 20, a: 0 }, { q: 21, a: 0 }], [{ q: 22, a: 1 }], [{ q: 23, a: 0 }]],
          'Additional Questions': [[{ q: 24, a: 0 }, { q: 25, a: 1 }], [{ q: 26, a: 0 }, { q: 27, a: 1 }], [{ q: 28, a: 0 }, { q: 29, a: 1 }], [{ q: 30, a: 0 }, { q: 29, a: 1 }], [{ q: 31, a: 0 }, { q: 32, a: 1 }]]
        }
      },
      cbcomments_manual: [{
        id: 'fff423ce-d7ea-ea11-a817-000d3a1a3603', // our guy
        name: 'test cb1',
        autoflag: {
          flag: 'something'
        },
        manualflag: {
          red: true
        },
        cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
        comment: {
          data: 'update here!'
        }
      }, {
        id: 'ffce242e-d9ea-ea11-a817-000d3a1a3603',
        name: 'test cb2',
        autoflag: null,
        manualflag: null,
        cborganization_id: 'e15376eb-f3e9-ea11-a817-000d3a1a3603',
        comment: {
          someghing: 123
        }
      }
      ],
      questions_manual: [
        {
          type: 1,
          order: 1,
          answertype: 2,
          answerdata: [{
            answers: ['I only trade FSC products', 'I produce FSC products'],
            outcome: [null, null]
          }
          ],
          questiontext: 'Do you produce products or only trade them?',
          idStr: '1',
          id: 'b95d3c12-70ea-ea11-a817-000d3a1a3603'
        }, {
          type: 1,
          order: 2,
          answertype: 1,
          answerdata: [{
            answers: ['yes', 'no'],
            outcome: [{
              scenario: 'Traders with physical possession',
              scenario_abbr: 'TDwPP',
              scenario_code: 3
            }, {
              scenario: 'Traders without physical possession',
              scenario_abbr: 'TD/PP',
              scenario_code: 4
            }
            ]
          }
          ],
          questiontext: 'Do you physically possess these products?',
          idStr: '2',
          id: 'd2056b27-71ea-ea11-a817-000d3a1a3603'
        }, {
          type: 1,
          order: 3,
          answertype: 1,
          answerdata: [{
            answers: ['yes', 'no'],
            outcome: [{
              scenario: 'Primary Producer',
              scenario_abbr: 'PP',
              scenario_code: 1
            }, {
              scenario: 'Secondary producer/processor',
              scenario_abbr: 'SP',
              scenario_code: 2
            }
            ]
          }
          ],
          questiontext: 'Are you a primary producer (meaning you use timber coming directly from the forest)?',
          idStr: '3',
          id: '4c9bc274-71ea-ea11-a817-000d3a1a3603'
        }, {
          type: 2,
          order: null,
          answertype: 2,
          answerdata: [{
            answers: ['Yes, my entire production is/will focus on FSC material', 'No, only part of my production will focus on FSC material'],
            outcome: [null, null]
          }
          ],
          questiontext: 'Does / would your entire production use FSC materials (as opposite to only part of the production set for FSC and other part not)?',
          idStr: '4',
          id: 'c835e3fa-80ea-ea11-a817-000d3a1a3603'
        }, {
          type: 2,
          order: null,
          answertype: 2,
          answerdata: [{
            answers: ['I only sell (would sell) products with one of the FSC claims that I have used as your input', 'I (would) either calculate a percentage claim that corresponds to the proportion of claim-contributing inputs, or chose a proportion of outputs to be sold with a credit claim corresponding to the quantity of claim-contributing inputs', 'I (would) apply all options'],
            outcome: [{
              scenario: 'Transfer system (all material is FSC certified/no segregation)',
              scenario_abbr: 'TR/S',
              scenario_code: 5
            }, null, null]
          }, {
            answers: ['I only sell (would sell) products with one of the FSC claims that I have used as your input', 'I (would) either calculate a percentage claim that corresponds to the proportion of claim-contributing inputs, or chose a proportion of outputs to be sold with a credit claim corresponding to the quantity of claim-contributing inputs', 'I (would) apply all options'],
            outcome: [null, null, null]
          }
          ],
          questiontext: 'Do you / would you only sell your products with one of the FSC claims that you have used as your input, or do you / would you calculate your output claims differently?',
          idStr: '5',
          id: 'a7eb8171-82ea-ea11-a817-000d3a1a3603'
        }, {
          type: 2,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [null, null]
          }
          ],
          questiontext: 'Is any of the following true for you? a. You sell (would sell) FSC 100% material? b. trade and processing of non-timber forest products (NTFPs), except for bamboo and NTFPs derived from trees (e.g. cork, resin, bark)',
          idStr: '6',
          id: 'fe5b85a0-84ea-ea11-a817-000d3a1a3603'
        }, {
          type: 2,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [{
              scenario: 'Transfer system (all material is FSC certified/no segregation)',
              scenario_abbr: 'TR/S',
              scenario_code: 5
            }, {
              error: 'No possibility for remote audit. Please contact certification body in your area.'
            }
            ]
          }
          ],
          questiontext: 'You cannot calculate a percentage claim nor apply proportion system - you can only sell your products with one of the FSC claims that you have used as your input. Do you want to do it?',
          idStr: '7',
          id: '9a22cb69-88ea-ea11-a817-000d3a1a3603'
        }, {
          type: 2,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [null, {
              scenario: 'Percentage/Credit system',
              scenario_abbr: 'PC',
              scenario_code: 7
            }
            ]
          }, {
            answers: ['Yes', 'No'],
            outcome: [null, {
              scenario: 'All three control systems/combination of systems',
              scenario_abbr: 'PCT',
              scenario_code: 8
            }
            ]
          }
          ],
          questiontext: 'Is any of the following true for you? d. print processes e. sale of products with FSC Small and Community Label and/or claim',
          idStr: '8',
          id: 'd62911df-88ea-ea11-a817-000d3a1a3603'
        }, {
          type: 2,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [{
              scenario: 'Percentage/Credit system',
              scenario_abbr: 'PC',
              scenario_code: 7
            }, {
              scenario: 'Transfer system (all material is FSC certified/no segregation)',
              scenario_abbr: 'TR/S',
              scenario_code: 5
            }
            ]
          }, {
            answers: ['Yes', 'No'],
            outcome: [{
              scenario: 'Percentage/Credit system',
              scenario_abbr: 'PC',
              scenario_code: 7
            }, {
              error: 'No possibility for remote audit. Please contact certification body in your area.'
            }
            ]
          }
          ],
          questiontext: 'You cannot apply proportion system - you can only calculate a percentage claim that corresponds to the proportion of claim-contributing inputs. Do you want to do it?',
          idStr: '9',
          id: '4f85e77e-89ea-ea11-a817-000d3a1a3603'
        }, {
          type: 2,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['yes', 'no'],
            outcome: [{
              scenario: 'Transfer system (with segregation)',
              scenario_abbr: 'TRwS',
              scenario_code: 6
            }, {
              scenario: 'Transfer system (all material is FSC certified/no segregation)',
              scenario_abbr: 'TR/S',
              scenario_code: 5
            }
            ]
          }
          ],
          questiontext: 'Do you physically separate FSC materials from non-FSC materials (temporarily or permanently)?',
          idStr: '10',
          id: 'da024121-8bea-ea11-a817-000d3a1a3603'
        }, {
          type: 3,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [null, null]
          }
          ],
          questiontext: 'Do you outsource any production activities related to your FSC materials?',
          idStr: '11',
          id: 'aaa6399c-8bea-ea11-a817-000d3a1a3603'
        }, {
          type: 3,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [{
              scenario: 'Outsourcing',
              scenario_abbr: 'OUT',
              scenario_code: 12
            }, null]
          }
          ],
          questiontext: 'Is any of the below true for you and your contractors? a) you outsource all or most of the manufacturing processes of a product; or b) your contractor(s) mixes different input materials (e.g. FSC 100%, controlled material, FSC controlled wood); or c) your contractor(s) applies the FSC label to the product; or d) your contractor(s) does not physically return the FSC certified product to you after outsourcing; or e) activities are outsourced to a contractor in another country with a Transparency International Corruption Perception Index (CPI) lower than 50.',
          idStr: '12',
          id: 'e5bec686-8dea-ea11-a817-000d3a1a3603'
        }, {
          type: 3,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [{
              scenario: 'Outsourcing',
              scenario_abbr: 'OUT',
              scenario_code: 12
            }, {
              scenario: 'Outsourcing',
              scenario_abbr: 'OUT',
              scenario_code: 12
            }
            ]
          }
          ],
          questiontext: 'Did you have any problems or non-conformities by your contractors regarding mixing different material groups or you otherwise think that there may be some problems?',
          idStr: '13',
          id: 'aecedc0a-ceea-ea11-a817-000d3a1a3603'
        }, {
          type: 3,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [null, null]
          }
          ],
          questiontext: 'Do you use any recycled materials?',
          idStr: '14',
          id: '4669a71c-ceea-ea11-a817-000d3a1a3603'
        }, {
          type: 3,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [{
              condition: 'All scenarios with traders',
              res: null
            }, null]
          }
          ],
          questiontext: 'Do you only use FSC recycled materials?',
          idStr: '15',
          id: 'fd247532-ceea-ea11-a817-000d3a1a3603'
        }, {
          type: 3,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [null, null]
          }
          ],
          questiontext: 'Do you/ would you audit your suppliers for the compliance with FSC requirements yourself (as opposite to e.g. using FSC accredited CB)?',
          idStr: '16',
          id: 'f25c4b40-ceea-ea11-a817-000d3a1a3603'
        }, {
          type: 3,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [{
              scenario: 'Sourcing recycled material (pre and/or post consumer)',
              scenario_abbr: 'REC',
              scenario_code: 10
            }, {
              scenario: 'Sourcing recycled material (pre and/or post consumer)',
              scenario_abbr: 'REC',
              scenario_code: 10
            }
            ]
          }
          ],
          questiontext: 'Can you present objective evidence for your classification of the material?',
          idStr: '17',
          id: 'e7fa3054-ceea-ea11-a817-000d3a1a3603'
        }, {
          type: 3,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [{
              scenario: 'Sourcing recycled material (pre and/or post consumer)',
              scenario_abbr: 'REC',
              scenario_code: 10
            }, {
              scenario: 'Sourcing recycled material (pre and/or post consumer)',
              scenario_abbr: 'REC',
              scenario_code: 10
            }
            ]
          }
          ],
          questiontext: 'Do you use FSC accredited CB (but not the same one that is auditing you)',
          idStr: '18',
          id: 'f2d30162-ceea-ea11-a817-000d3a1a3603'
        }, {
          type: 3,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [null, null]
          }
          ],
          questiontext: 'Do you / would you use any uncertified material that you would like to mix in with certified material (this can happen when you e.g. do not have enough FSC certified material and it means applying additional standards for Mix products FSC-STD-40-005)?',
          idStr: '19',
          id: 'cb91fe9b-ceea-ea11-a817-000d3a1a3603'
        }, {
          type: 3,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [null, {
              scenario: 'Sourcing non-certified wood for use in FSC product groups (as CW)',
              scenario_abbr: 'CW',
              scenario_code: 9
            }
            ]
          }
          ],
          questiontext: 'Can ensure that you do not mix your uncertified material with non-FSC materials?',
          idStr: '20',
          id: '3c8543a9-ceea-ea11-a817-000d3a1a3603'
        }, {
          type: 3,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [{
              scenario: 'Sourcing non-certified wood for use in FSC product groups (as CW)',
              scenario_abbr: 'CW',
              scenario_code: 9
            }, {
              scenario: 'Sourcing non-certified wood for use in FSC product groups (as CW)',
              scenario_abbr: 'CW',
              scenario_code: 9
            }
            ]
          }
          ],
          questiontext: 'Is your uncertified material coming from low risk regions as per FSC risk assessments?',
          idStr: '21',
          id: 'af1d2bbe-ceea-ea11-a817-000d3a1a3603'
        }, {
          type: 3,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [null, {
              scenario: 'Group/multi-site certification',
              scenario_abbr: 'MLT',
              scenario_code: 11
            }
            ]
          }
          ],
          questiontext: 'Is all your operation located just in one physical location?',
          idStr: '22',
          id: 'f7111acd-ceea-ea11-a817-000d3a1a3603'
        }, {
          type: 3,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [{
              scenario: 'Labeling products',
              scenario_abbr: 'LAB',
              scenario_code: 13
            }, null]
          }
          ],
          questiontext: 'Do you (would you) label your FSC products with FSC Label?',
          idStr: '23',
          id: 'b144c2d8-ceea-ea11-a817-000d3a1a3603'
        }, {
          type: 4,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [null, null]
          }
          ],
          questiontext: 'Is your main product chaco?',
          idStr: '24',
          id: 'be4a1bf0-ceea-ea11-a817-000d3a1a3603'
        }, {
          type: 4,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [{
              condition: 'All scenarios with traders',
              res: 'RISK',
              RISK: 'HIGH'
            }, {
              condition: 'All scenarios with traders',
              res: 'RISK',
              RISK: 'LOW'
            }
            ]
          }
          ],
          questiontext: 'Are you sourcing from either Ukraine, Romania, or Africa?',
          idStr: '25',
          id: '71d43600-cfea-ea11-a817-000d3a1a3603'
        }, {
          type: 4,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [null, null]
          }
          ],
          questiontext: 'Is your main product plywood?',
          idStr: '26',
          id: 'ca7a630b-cfea-ea11-a817-000d3a1a3603'
        }, {
          type: 4,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [{
              condition: 'All scenarios with traders',
              res: 'RISK',
              RISK: 'HIGH'
            }, {
              condition: 'All scenarios with traders',
              res: 'RISK',
              RISK: 'LOW'
            }
            ]
          }
          ],
          questiontext: 'Are you sourcing from either south east Asia or China?',
          idStr: '27',
          id: '043d3023-cfea-ea11-a817-000d3a1a3603'
        }, {
          type: 4,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [null, null]
          }
          ],
          questiontext: 'Do you use Mango wood?',
          idStr: '28',
          id: '98ed9131-cfea-ea11-a817-000d3a1a3603'
        }, {
          type: 4,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [{
              condition: 'All scenarios with traders',
              res: 'RISK',
              RISK: 'HIGH'
            }, {
              condition: 'All scenarios with traders',
              res: 'RISK',
              RISK: 'LOW'
            }
            ]
          }
          ],
          questiontext: 'Do you source it from India?',
          idStr: '29',
          id: '4e124e3e-cfea-ea11-a817-000d3a1a3603'
        }, {
          type: 4,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [null, null]
          }
          ],
          questiontext: 'Do you use Dalbergia wood?',
          idStr: '30',
          id: 'c1809249-cfea-ea11-a817-000d3a1a3603'
        }, {
          type: 4,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [null, null]
          }
          ],
          questiontext: 'Do you use Paulownia wood?',
          idStr: '31',
          id: '4789aa57-cfea-ea11-a817-000d3a1a3603'
        }, {
          type: 4,
          order: null,
          answertype: 1,
          answerdata: [{
            answers: ['Yes', 'No'],
            outcome: [{
              condition: 'All scenarios with traders',
              res: 'RISK',
              RISK: 'HIGH'
            }, {
              condition: 'All scenarios with traders',
              res: 'RISK',
              RISK: 'LOW'
            }
            ]
          }
          ],
          questiontext: 'Do you source it from China?',
          idStr: '32',
          id: 'faeab563-cfea-ea11-a817-000d3a1a3603'
        }
      ],
      //
      toggle1: 'Yes',
      step: 1,
      done1: false,
      done2: false,
      done3: false,
      editor: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...',
      tabCovid1: 'one',
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      togglemodel: 'green',
      filter: '',
      mode: 'list',
      employee_dialog: false,
      columns: [
        /* {
          name: 'serial_no',
          align: 'left',
          label: 'Serial No.',
          field: 'serial_no',
          sortable: true
        },
        {
          name: 'emp_id',
          required: true,
          label: 'Employee Id',
          align: 'left',
          field: 'emp_id',
          sortable: true
        }, */
        {
          name: 'name',
          align: 'left',
          label: 'Name',
          field: 'name',
          sortable: true
        },
        {
          name: 'details',
          align: 'left',
          label: 'Details',
          field: 'details',
          sortable: false,
          style: `font-size: 0.8em;
            max-width: 200px;
            width: 200px;
            white-space: normal;
            color: green;`
        },
        /* {
          name: 'salary_type',
          align: 'left',
          label: 'Salary Type',
          field: 'salary_type',
          sortable: true
        },
        {
          name: 'basic_salary',
          align: 'left',
          label: 'Basic salary',
          field: 'basic_salary',
          sortable: true
        },
        {
          name: 'overtime',
          align: 'left',
          label: 'Overtime',
          field: 'overtime',
          sortable: true
        }, */
        {
          name: 'detail',
          align: 'left',
          label: 'Detail',
          field: 'detail',
          sortable: false,
          style: `font-size: 0.8em;
          max-width: 200px;
          width: 200px;
          white-space: normal;`
        },
        {
          name: 'action',
          align: 'left',
          label: 'Action',
          field: 'action',
          sortable: true
        }
      ],
      data: [
        {
          serial_no: '01',
          emp_id: 'Emp 233',
          name: 'Leslie Tecklenburg',
          details: 'something something. one two three. 1 2 3. and again and again',
          basic_salary: '$ 4200',
          salary_type: 'Basic',
          overtime: '$ 20'
        },
        {
          serial_no: '02',
          emp_id: 'Emp 104',
          name: 'Lia Whitledge',
          details: 'something something. one two three. 1 2 3. and again and again',
          basic_salary: '$ 2550',
          salary_type: 'Basic',
          overtime: '$ 40'
        },
        {
          serial_no: '03',
          emp_id: 'Emp 345',
          name: 'Sam Wileman',
          details: 'something something. one two three. 1 2 3. and again and again',
          basic_salary: '$ 3800',
          salary_type: 'Basic',
          overtime: '$ 90'
        },
        {
          serial_no: '04',
          emp_id: 'Emp 345',
          name: 'Edgar Colmer',
          details: 'something something. one two three. 1 2 3. and again and again. something something. one two three. 1 2 3. and again and again',
          basic_salary: '$ 4000',
          salary_type: 'Basic',
          overtime: '$ 56'
        },
        {
          serial_no: '05',
          emp_id: 'Emp 895',
          name: 'Kaiden Rozelle',
          details: 'something something. one two three. 1 2 3. and again and again. something something. one two three. 1 2 3. and again and again. something something. one two three. 1 2 3. and again and again',
          basic_salary: '$ 3200',
          salary_type: 'Basic',
          overtime: '$ 23'
        }
      ],
      pagination: {
        rowsPerPage: 10
      }
    }
  },
  methods: {
    getQuestions: function () {
      console.log('getQuestions, token: ', this.$root.$data.access_token)
      var that = this

      var backendURL = 'https://justasimpletestok01.azurewebsites.net/api/HttpTrigger1?code=7mZOadETGYP7mRoZNDdKXcf8i4UGpwZPV7jP8LLSwb9aTUxj00Wpow=='

      this.loading_visible = true

      var config1 = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: { command: 'getquestions', params: { access_token: this.$root.$data.access_token } },
        url: backendURL
      }
      var config2 = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: { command: 'getcbcomments', params: { access_token: this.$root.$data.access_token } },
        url: backendURL
      }
      var config3 = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: { command: 'getdecisiontrees', params: { id: 'd5f035ba-d6ea-ea11-a817-000d3a1a3603', access_token: this.$root.$data.access_token } },
        url: backendURL
      }

      return Promise.all([Axios(config1), Axios(config2), Axios(config3)])
        .then(function ([res1, res2, res3]) {
          that.loading_visible = false
          console.log('call res1: ', res1)
          console.log('call res2: ', res2)
          console.log('call res3: ', res3)

          if (!res1 || !res2 || !res3 || !res1.data || !res2.data || !res1.data.value || !res2.data.value || !res3.data) {
            that.$q.notify({
              message: 'Some data missing!',
              color: 'negative',
              icon: 'report_problem',
              position: 'center',
              timeout: 10000,
              multiLine: true
            })
          }

          if (res1.data.value) {
            that.questions = res1.data.value.map(function (q) {
              try {
                var tmp = {
                  type: q.new_type,
                  order: q.new_order,
                  answertype: q.new_answertype,
                  answerdata: JSON.parse(q.new_answerdata),
                  questiontext: q.new_questiontext,
                  idStr: q.new_id,
                  id: q.new_fsc_questionid
                }
              } catch (e) {
                console.log('err in "that.questions = res1.map", probably broken JSON in answerdata: ', e)
                tmp = {
                  type: 1,
                  order: 1,
                  answertype: 1,
                  answerdata: {},
                  questiontext: 'broken data',
                  idStr: '0',
                  id: null
                }
              }
              return tmp
            })
          }
          console.log('that.questions: ', that.questions)

          if (res2.data.value) {
            that.cbcomments = res2.data.value.map(function (q) {
              try {
                var tmp = {
                  id: q.new_cbcommentandflagid,
                  name: q.new_name,
                  autoflag: JSON.parse(q.new_autoflag),
                  manualflag: JSON.parse(q.new_manualflag),
                  cborganization_id: q._new_cborganization_value,
                  comment: JSON.parse(q.new_cbcomment)
                }
              } catch (e) {
                console.log('err in "that.cbcomments = res2.map", probably broken JSON: ', e)
                tmp = {
                  id: null,
                  name: 'broken',
                  autoflag: {},
                  manualflag: {},
                  cborganization_id: null,
                  comment: {}
                }
              }
              return tmp
            })
          }
          console.log('that.cbcomments: ', that.cbcomments)

          if (res3.data) {
            try {
              var dtmp = {
                id: res3.data.new_fsc_decision_treeid,
                applicantorg_id: res3.data._new_organization_value,
                cbcomment_id: res3.data._new_cbcommentandflag_value,
                name: res3.data.new_name,
                data: JSON.parse(res3.data.new_data)
              }
            } catch (e) {
              console.log('err in "that.decisiontree assign", probably broken JSON: ', e)
              dtmp = {
                id: null,
                applicantorg_id: null,
                cbcomment_id: null,
                name: 'broken dt',
                data: {}
              }
            }
            that.decisiontree = dtmp
          }
          console.log('that.decisiontree: ', that.decisiontree)

          // eslint-disable-next-line eqeqeq
          var comment = that.cbcomments.find(function (c) { return c.id == that.decisiontree.cbcomment_id })

          function enhanceTree (arg) {
            var x = arg.map(function (a) {
              var y = a.map(function (b) {
                // eslint-disable-next-line eqeqeq
                var question = that.questions.find(function (q) { return q.idStr == b.q })
                var answer, outcome, i = 0
                if (b.case && question.answerdata[b.case]) { i = b.case }
                var j = b.a
                if (question.answerdata[i].answers.length < j) j = 0
                answer = question.answerdata[i].answers[j]
                outcome = question.answerdata[i].outcome[j]

                if (outcome) {
                  that.outcome.arr.push(outcome)
                  if (outcome.scenario_abbr) {
                    that.outcome.scenario_abbr_arr.push(outcome.scenario_abbr)
                  }
                }

                var z = {
                  questiontext: question.questiontext,
                  id: question.id,
                  idStr: question.idStr,
                  answertype: question.answertype,
                  answertext: answer,
                  outcome: outcome,
                  // todo: comments and flags too!
                  comment: comment // for now, will make this same comment for all. todo: parse as individual pieces
                }
                return z
              })
              return y
            })
            return x
          }
          // todo: get outcome from decisiontree here, with flags and risks
          // enhance decision tree with flags and risks
          // decisiontree_q_a_c
          var tmp1 = that.decisiontree.data['Filter Level I']
          var tmp2 = that.decisiontree.data['Filter Level II']
          var tmp3 = that.decisiontree.data['Filter Level III']
          var tmp4 = that.decisiontree.data['Additional Questions']

          var tmp1_ = enhanceTree(tmp1)
          var tmp2_ = enhanceTree(tmp2)
          var tmp3_ = enhanceTree(tmp3)
          var tmp4_ = enhanceTree(tmp4)

          // console.log('tmp1_: ', tmp1_)
          // console.log('tmp2_: ', tmp2_)
          // console.log('tmp3_: ', tmp3_)
          // console.log('tmp4_: ', tmp4_)

          that.decisiontree_q_a_c = {
            'Filter Level I': tmp1_,
            'Filter Level II': tmp2_,
            'Filter Level III': tmp3_,
            'Additional Questions': tmp4_
          }
          console.log('decisiontree_q_a_c: ', that.decisiontree_q_a_c)
        })
        .catch(function (error) {
          console.log('call err: ', error)
          that.loading_visible = false
          that.$q.notify({
            message: JSON.stringify(error),
            color: 'negative',
            icon: 'report_problem',
            position: 'center',
            timeout: 10000,
            multiLine: true
          })
        })
    }
  },
  name: 'Page1'
}
</script>

<style scoped>
  .q-chip__content {
    display: block;
    text-align: center;
  }

  .my-table-details {
    font-size: 0.85em;
    font-style: italic;
    max-width: 200px;
    white-space: normal;
    color: #555;
    margin-top: 4px;
}

.my-card >>> {
  width: 100%;
  max-width: 370px;
}

</style>
