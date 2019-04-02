<template>
  <section class="my-page-index">
    <section class="my-index-card">
      <my-card></my-card>
      <my-card></my-card>
      <my-card></my-card>
      <my-card></my-card>
    </section>
    <my-echart-bar></my-echart-bar>
  </section>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
  import MyEchartBar from '@/components/charts/bar'
  import MyCard from './card/card'
  export default {
    name: 'indexManage',
    components: {
      MyEchartBar,
      MyCard
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
@import '@/assets/style/mixin.scss';
@include b(page-index) {
  @include b(index-card) {
    @include flex($dir: row, $justify: space-between);
    margin-bottom: 20px;
  }
}
</style>
