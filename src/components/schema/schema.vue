<template>
  <section class="my-page-schema">
    <slot></slot>
  </section>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

  export default {
    name: 'mySchema',
    components: {},
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
@import '@/assets/style/color.scss';
@import '@/assets/style/mixin.scss';

@include b(page-schema) {
  width: inherit;
  height: 100%;
  padding: 10px;
  background-color: $b-light;
  box-sizing: border-box;
  overflow: scroll;
  @include scroll-bar;
}
</style>
