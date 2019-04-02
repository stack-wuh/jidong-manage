<template>
  <section class="my-ad-index">
    <section v-if="$route.meta.routerAlias == 'mine'">
      <router-view></router-view>
    </section>
    <section v-else>
      <my-tabs name="广告投放"></my-tabs>
      <router-view></router-view>
    </section>
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
