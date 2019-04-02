<template>
  <section class="my-fodder">
    <section
      v-for="(item, index) in 12"
      :key="index"
      class="my-fodder__list">
      <section class="my-fodder__item">
        <section class="my-fodder__left">
          <img src="../../assets/imgs/avatar.jpg" alt="avatar">
        </section>
        <section class="my-fodder__center">
          <h4 class="my-fodder__center--title">标题标题</h4>
          <p class="my-fodder__center-wrap">
            <span class="my-fodder__center-wrap--type">多图类广告</span>
            <time class="my-fodder__center-wrap--time">2019-04-01 10:00</time>
          </p>
          <p class="my-fodder__center--tips">
            <span>检查落地页网址</span>
          </p>
        </section>
        <section class="my-fodder__right">
          <el-button type="primary">投放广告</el-button>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
  export default {
    name: 'fodder',
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
@import '@/assets/style/color.scss';

@include b(fodder) {
  // display: none !important;
  @include flex($dir: row, $align: center, $justify: space-between, $wrap: wrap);
  padding: 0 30px;
  box-sizing: border-box;
  @include e(list) {
    width: 49%;
    border-bottom: 1px solid $b-base;
  }
  @include e(item) {
    @include flex($dir: row, $justify: space-between);
  }
  @include e(left) {
    position: relative;
    width: 30%;
    overflow: hidden;
  }
  @include e(center) {
    @include flex($dir: column, $align: stretch, $justify: space-between);
    flex: 1;
    padding: 10px 0;
    box-sizing: border-box;
    font-size: 14px;

    @include m(title) {
      text-align: 20px;
      margin-bottom: 20px;
    }
    @include m(tips) {
      margin-top: 40px;
      text-wrap: nowrap;
      & > span {
        padding: 2px 10px;
        color: $-sub;
        background-color: #E5F4FF;
        border-radius: 12px;
        user-select: none;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  @include e(center-wrap) {
    @include m(time) {
      color: $t-999;
    }
    @include m(type) {
      margin-right: 6%;
      color: $-sub;
    }
  }
  @include e(right) {
    align-self: center;
  }
}
</style>
