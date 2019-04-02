<template>
  <section class="my-card">
    <h3 class="my-card__title">项目</h3>
    <p class="my-card__desc">描述</p>
    <p class="my-card__desc">其他</p>
  </section>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
  export default {
    name: '',
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
@import '@/assets/style/mixin.scss';
@include b(card) {
  width: 20%;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 0 10px #eee;
}
</style>
