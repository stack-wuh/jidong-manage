<template>
  <section class="my-page-table-list">
    <my-search v-if="canShowSearchBox.includes(path)"></my-search>
    <my-table :list="list"></my-table>
    <my-pagination :total="total" :currPage="currPageNum"></my-pagination>
  </section>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
  import MyTable from '@/components/schema/table'
  import MySearch from '@/components/schema/search'
  import MyPagination from '@/components/schema/pagination'

  const canShowSearchBox = []

  export default {
    name: 'MyTableList',
    components: {
      MyTable,
      MySearch,
      MyPagination
    },
    props: {},
    model: {},
    data (){
      return {
        canShowSearchBox,
      }
    },
    computed: {
      ...mapState({
        list: state => state.tableData,
        total: state => state.total,
        currPageNum: state => state.currPageNum
      }),
      path(){
        return this.$route.path
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
@include b(table-list) {

}
</style>
