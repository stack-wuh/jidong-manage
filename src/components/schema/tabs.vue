<template>
  <section class="my-tabs">
    <ul class="my-tabs__list">
      <li
        @click="$_push({path: item.path, query: item.query})"
        v-for="(item, index) in tabList"
        :key="index"
        class="my-tabs__item"
        :class="[
          {'is-active': path == item.path}
        ]">
        <span>{{item.name}}</span>
      </li>
    </ul>
  </section>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
  import menuList from '@/utils/menu'
  import {_router} from '@/utils/mixin'

  export default {
    name: 'MyTabs',
    components: {},
    props: {
      name: {
        type: String,
        required: true,
        default: '广告商管理'
      },
      alias: {
        type: String,
        required: false,
      }
    },
    model: {},
    computed: {
      MenuList(){
        if(this.alias){
          return menuList.find(kk => kk.alias == this.alias)
        }else {
          return menuList.find(kk => kk.name == this.name)
        }
      },
      path(){
        return this.$route.path
      },
      tabList(){
        let list = JSON.parse(JSON.stringify(this.MenuList.child))
        list.forEach((kk, kl) => {
          if(kk.name == '我的广告投放'){
            list.splice(kl, 1)
          }
        })
        return list
      }
    },
    data (){
      return {}
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
</style>
