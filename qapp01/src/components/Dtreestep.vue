<template>
  <div>
    <div>Do you produce products or only trade them?</div>
    <q-toggle
        size="lg" v-model="toggle1"
        :label="toggle1"
        checked-icon="check"
        unchecked-icon="clear"
        false-value="No"
        true-value="Yes"
        disable
    />
    <q-icon name="flag" class="text-red bg-deep-orange-2 rounded-borders float-right" style="font-size: 2rem; margin-top:6px;"/>
  </div>
</template>
<script>
export default {
  name: 'dtreestep',
  mounted () {
    console.log('dtreestep mounted', this.q_a_c_data)
  },
  props: {
    toggle1: {},
    q_a_c_data: {}
  }
}
</script>
<style scoped>

.my-card >>> {
  width: 100%;
  max-width: 370px;
}

</style>
