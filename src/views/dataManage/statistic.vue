<template>
  <section class="page">
    <my-chart-bar></my-chart-bar>
  </section>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
  import MyChartBar from '@/components/charts/bar'
  export default {
    name: '',
    components: {
      MyChartBar
    },
    props: {},
    model: {},
    computed: {},
    data (){
      return {}
    },
    watch: {},
    methods: {},
    created(){},
    mixins:[]
  }
</script>

<style scoped lang="scss">
</style>
