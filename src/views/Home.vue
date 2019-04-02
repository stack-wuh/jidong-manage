<template>
  <div class="home">
    <MyHeader />
    <section class="body-wrapper">
      <leftmenu></leftmenu>
      <section class="router-wrapper">
        <transition name="fade">
          <my-schema>
            <router-view></router-view>
          </my-schema>
        </transition>
      </section>
    </section>

    <my-dialog></my-dialog>
  </div>
</template>

<script>
import MyHeader from '@/components/nav/header'
import MyAside from '@/components/nav/aside'
import MyFooter from '@/components/nav/footer'
import Leftmenu from '@/components/nav/leftmenu'
import MyCrumbs from '@/components/nav/crumbs'
import MyDialog from '@/components/schema/dialog'
import MySchema from '@/components/schema/schema'

export default {
  name: 'home',
  components: {
    MyHeader,
    MyAside,
    MyFooter,
    Leftmenu,
    MyCrumbs,
    MyDialog,
    MySchema
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/mixin.scss';
@import '@/assets/style/color.scss';
  .home{
    height: inherit;
    display: flex;
    flex-flow: column nowrap;

    .body-wrapper{
      height: inherit;
      display: flex;
      justify-content: space-between;
      flex:1;
      .router-wrapper{
        @include scroll-bar;
        flex:1;
        height: calc(100% - 40px);
        padding: 20px;
        border-left: 1px solid #eee;
        background-color: $b-base;
        overflow-y: scroll;
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
