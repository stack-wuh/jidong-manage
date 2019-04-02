<template>
  <section class="my-page-mine-ad">
    <section class="my-tabs">
      <ul class="my-tabs__list">
        <li
          @click="$_push({path: item.link, query: item.query})"
          v-for="(item, index) in tabsList"
          :key="index"
          class="my-tabs__item"
          :class="[
            {'is-active': path == item.link}
          ]">
          <span>{{item.name}}</span>
        </li>
      </ul>
    </section>
    <section class="my-mine-search-box">
      <ul class="my-mine-search-box__list">
        <li class="my-mine-search-box__item">
          <span class="my-mine-search-box__item--label">状态</span>
          <section class="my-mine-search-box__item--right">
            <span 
              v-for="(ss, sl) in statusList" 
              :key="sl"
              class="search-box__status"
              :class="[
              {'is-status': sl == 0}
              ]"
            >{{ss.label}}</span>
          </section>
        </li>
        <li class="my-mine-search-box__item">
          <span class="my-mine-search-box__item--label">时间</span>
          <section class="my-mine-search-box__item--right">
            <el-date-picker 
              style="width: 240px;"
              type="daterange" 
              range-seperator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </section>
        </li>
      </ul>
    </section>
    <section class="my-ad-list-box">
      <section  
        v-for="(item, index) in 10"
        :key="index"
       class="my-ad-list">
        <section class="my-ad-list__left">
          <img class="my-ad-list__left--logo" src="" alt="logo">
        </section>
        <section class="my-ad-list__center">
          <section class="my-ad-list__center--lf">
            <h6 class="my-ad__lf-title">标题</h6>
            <p class="my-ad__lf-type">
              <span class="is-main">高价广告</span>
              <span class="is-primary">多图类广告</span>
            </p>
            <p class="my-ad__lf-time">
              <span>投放日期: 周一、周二、周三</span>
              <span>2019-03-20 17:00</span>
            </p>
            <p>
              <span class="is-primary">检查落地页地址</span>
            </p>
          </section>
          <section class="my-ad-list__center--rg">
            <p>单次点击扣费: 0.5元</p>
            <p>总投放: <span class="is-danger">10000</span>元=20000次</p>
            <p>已被点击: <span class="is-danger">327</span>次</p>
          </section>
        </section>
        <el-button 
          class="my-ad-list__right" 
          type="primary"
          @click="$_push({path: '/ads/mine/setting', query: {l: '广告投放', f: '我的广告投放', c: '我的广告投放设置'}})">投放设置</el-button>
      </section>
    </section>
  </section>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
  import {
    _router
  } from '@/utils/mixin'
  const tabsList = [
    {
      name: '我的广告投放',
      link: '/ads/mine',
      query: {
        l: '广告投放',
        f: '我的广告投放'
      }
    },
    {
      name: '投放规则',
      link: '/ads/rule',
      query: {
        l: '广告投放',
        f: '投放规则'
      }
    },
    {
      name: '投放日志',
      link: '/ads/logs',
      query: {
        l: '广告投放',
        f: '投放日志'
      }
    }
  ]
  const statusList = [
    {
      label: '投放中',
      value: 0
    },
    {
      label: '待审核',
      value: 1
    },
    {
      label: '审核未通过',
      value: 2
    },
    {
      label: '已关闭',
      value: 3
    }
  ]
  export default {
    name: 'mineAd',
    components: {},
    props: {},
    model: {},
    computed: {
      path(){
        return this.$route.path
      }
    },
    data (){
      return {
        tabsList,
        statusList
      }
    },
    watch: {},
    methods: {},
    created(){},
    mixins:[_router]
  }
</script>

<style scoped lang="scss">
@import '@/assets/style/color.scss';
@import '@/assets/style/mixin.scss';
@include when(danger){
  color: $danger;
}
@include when(primary) {
  color: $-sub;
}
@include when(main){
  color: $-main;
}
@include b(tabs) {
  @include flex($dir: row, $align: center, $justify: flex-start);
  width: inherit;
  height: 50px;
  margin-bottom: 15px;
  border-bottom: 1px solid $b-base;
  @include e(list) {
    @include flex($dir: row, $align: center);
    width: inherit;
    height: 100%;
  }
  @include e(item) {
    height: 100%;
    margin-right: 15px;
    line-height: 3;
    &:hover {
      cursor: pointer;
      color: $-main;
      border-bottom: 2px solid $-main;
      transition: color .5 ease;
    }
    @include when(active) {
      color: $-main;
      border-bottom: 2px solid $-main;
    }
  }
}
@include b(mine-search-box) {
  width: inherit;
  @include e(list) {
    @include flex($dir: column, $wrap: wrap);
    width: inherit;
  }
  @include e(item) {
    @include flex($dir: row, $align: center);
    height: 40px;
    line-height: 40px;
    font-size: 13px;
    @include m(label) {
      display: inline-block;
      width: 55px;
      color: $t-999;
    }
    @include m(right) {
      & > .search-box__status {
        margin-right: 10px;

        &:hover {
          cursor: pointer;
          color: $-main;
          transition: color .3s ease;
        }
      }
    }
  }
}
@include when(status) {
  color: $-main; 
}
@include b(ad-list-box) {
  @include flex($dir: column, $justify: space-between);
  width: inherit;
  height: inherit;
  padding: 10px 20px;
  box-sizing: border-box;
  @include b(ad-list) {
    @include flex($dir: row, $justify: space-between);
    width: 100%;
    height: 100%;
    padding: 20px 0;
    border-bottom:  1px solid $b-base;
    box-sizing: border-box;
    @include e(left) {
      position: relative;
      width: 18%;
      height: 100%;
      overflow: hidden;
      & > img {
        width: 100%;
      }
    }
    @include e(center) {
      @include flex($dir: row, $align: center);
      flex: 1;
      &--lf {
        flex: .8;
        padding-right: 10%;
        border-right: 2px solid $b-base;
        font-size: 14px;
        p {
          line-height: 2;
        }
        .my-ad__lf-title {
          font-size: 16px;
        }
        .my-ad__lf-type {
          span:first-of-type {
            padding-right: 10px;
            border-right: 1px solid $b-base;
          }
          span:first-of-type + span {
            padding-left: 10px;
          }
        }
        .my-ad__lf-time{
          color: $t-999;
          & + p {
            span {
              padding: 3px 10px;
              background-color: #E5F4FF;
              border-radius: 12px;
              font-size: 12px;

              &:hover {
                cursor: pointer;
              }
            }
          }
        }
      }
      &--rg {
        padding-left: 5%;
        font-size: 14px;
        & > p {
          line-height: 2;
        }
      }
    }
    @include e(right) {
      align-self: center;
    }
  }
}
</style>
