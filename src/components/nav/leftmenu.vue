<template>
  <section class="my-page-leftmenu">
    <section class="my-menu-header">
      <div class="my-menu-header__avatar-box">
        <img class="my-menu-header__avatar" :src="avatarImg" alt="avatar">
      </div>
      <h5 class="my-menu-header__title">武汉方兔科技有限公司</h5>
    </section>

    <el-menu
      class="my-page-leftmenu__el-menu"
      :unique-opened="true"
      active-text-color="#ffda1f"
      text-color="#A1ABB2"
      router>
      <el-submenu
        v-for="(item, index) in subMenuList"
        :key="item.name + index"
        :index="item.name + index">
        <template slot="title">
          <i :class="item.icon" class="el-icon-menu"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item
          v-for="(sub, sid) in item.child"
          :key="sub.name + sid"
          :index="sub.name + sid"
          :route="{path: sub.path, query: sub.query}">
          <i class="el-icon-shezhi"></i>
          <span>{{sub.name}}</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item
        v-for="(item, index) in menuItemList"
        :key="item.name + index"
        :index ="item.name + index"
        :router="{path: item.path, query: item.query}">
        <i :class="item.icon" class="el-icon-menu"></i>
        <span>{{item.name}}</span>
      </el-menu-item>
    </el-menu>
  </section>
</template>

<script>
const avatarImg = require('@/assets/imgs/tuxiang.png')
import Menu from '@/utils/menu'
  export default {
    name: 'LayoutLeftmenu',
    components: {},
    props: {},
    model: {},
    data (){
      return {
        Menu,
        avatarImg
      }
    },
    computed: {
      subMenuList(){
        return Menu.filter(k => k.child)
      },
      menuItemList(){
        return Menu.filter(k => !k.child)
      }
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
  @include b(page-leftmenu) {
    width: 220px;
    background-color: $b-dark;
    @include e(el-menu) {
      border-right-color: transparent;
      background-color: inherit;
    }

    @include b(menu-header) {
      @include flex($dir: column, $align: center, $justify: center);
      margin-top: 80px;
      margin-bottom: 100px;
      text-align: center;
      color: $t-light;

      @include e(avatar-box) {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;

        & > img{
          width: 100%;
        }
      }
      @include e(title) {
        margin-top: 10px;
        font-size: 14px;
        font-weight: normal;
      }
    }
  }
</style>
