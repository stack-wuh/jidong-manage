<template>
  <section class="my-ad-index">
    <my-tabs name="财务管理" alias="fau"></my-tabs>

    <router-view></router-view>
  </section>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
  import MyTabs from '@/components/schema/tabs'


  export default {
    name: 'MyAdIndex',
    components: {
      MyTabs,
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
@include b(ad-index) {

}
</style>
