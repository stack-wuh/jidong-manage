<template>
  <section class="wrapper header-wrapper">
    <header class="my-header">
      <section class="my-header__logo">
        <img src="../../assets/imgs/jds_logo.png" alt="jdlogo">
      </section>
      <ul class="my-header__top-link">
        <li class="my-header__top-link--item is-italic">全国统一客服咨询热线 : </li>
        <li class="my-header__top-link--item">
          <img class="head-icon" src="../../assets/imgs/head_icon_tel.png" alt="icon_tel">
          <span class="my-header__top-link--item">027-8654321</span>
        </li>
        <li class="my-header__top-link--item">
          <img class="head-icon" src="../../assets/imgs/head_icon_tel.png" alt="icon_tel">
          <span class="my-header__top-link--item">027-8654321</span>
        </li>
        <li class="my-header__top-link--item">
          <img class="head-icon" src="../../assets/imgs/head_icon_qq.png" alt="icon_qq">
          <span class="my-header__top-link--item">QQ: 87654322</span>
        </li>
      </ul>

      <section class="my-header__icon">
        <el-dropdown>
          <span class="my-icon my-icon-account">方兔科技有限公司</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <span
                @click="$_push({path: '/user/center'})"
                class="my-icon-left my-icon-account">
                公司信息
              </span>
            </el-dropdown-item>
            <el-dropdown-item>
              <span
                @click="$_push({path: '/user/setting'})"
                class="my-icon-left my-icon-set">
                修改密码
              </span>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <span
                @click="$_push({path: '/signin'})"
                class="my-icon-left my-icon-dianyuan">
                退出登录
              </span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown trigger="click">
            <span class="my-icon my-icon-remind">
              <el-badge value="10" class="my-badge-item">
              </el-badge>
            </span>
          <el-dropdown-menu slot="dropdown">
            <div class="" style="width: 300px;">
              <el-tabs style="width: 280px; margin-left: 10px;">
                <el-tab-pane label="消息" name="first">
                  消息
                </el-tab-pane>
                <el-tab-pane label="通知" name="second">
                  通知
                </el-tab-pane>
                <el-tab-pane label="待办" name="third">
                  待办
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-dropdown-menu>
        </el-dropdown>
      </section>
    </header>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import {
  _router
} from '@/utils/mixin'
export default {
  props: {},
  name: 'LayoutHeader',
  components: {},
  computed: {},
  data(){
    return {}
  },
  methods: {},
  created(){},
  mixins: [_router]
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/mixin.scss';
@import '@/assets/style/color.scss';
.header-wrapper{
  @include flex($dir: row, $align: center);
  width: inherit;
  height: 60px;
  padding-right: 20px;
  background-color: #fff;
  @include b(header){
    @include flex($dir: row, $align: center, $justify: space-between);
    flex: 1;
    height: 100%;
    @include e(logo) {
      height: 100%;
      width: 220px;
      background-color: #000;

      & > img {
        width: 100%;
        transform: scale3d(.7, .7, .7);
      }
    }
    @include e(top-link) {
      @include flex($dir: row, $align: center);
      flex: 1;
      margin-left: 40px;
      font-size: 16px;

      @include m(item) {
        margin-right: 20px;
      }
      img.head-icon {
        vertical-align: bottom;
        margin-right: 10px;
      }
    }

    @include e(icon) {
      @include b(icon) {
        margin: 0 10px;
        font-size: 16px;
        &:before {
          padding-right: 5px;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
.my-icon-left {
  font-size: 14px;
  &:before {
    padding-right: 5px;
  }
}
.my-badge-item {
  position: absolute;
  left: 15px;
  top: -10px;
}
@include when(italic) {
  font-style: italic;
}
</style>
