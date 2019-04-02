<template>
  <section class="my-page-form">
    <el-form
      :model="form"
      ref="myFormModel"
      class="my-form-wrap">
      <el-form-item
        v-for="(item, index) in FormModel.list"
        :key="index"
        :label="item.label"
        :prop="item.field"
        :rules="item.rule"
        label-width="140px">
          <template v-if="item.type == 'input'">
            <el-input v-model="form[item.field]" :placeholder="item.place" />
            <p class="my-form-wrap__tips" v-if="item.pTips">{{item.pTips}}</p>
          </template>
          <template v-if="item.type == 'select'">
            <el-select v-model="form[item.field]" :placeholder="item.place">
              <el-option v-for="(ss, sl) in item.list" :key="sl" :label="ss.label" :value="ss.value"></el-option>
            </el-select>
          </template>
          <template v-if="item.type == 'uploadImg'">
            <el-upload
              :action="uploadPath"
              class="avatar-uploader"
              :show-file-list="false"
              name="multipartFile"
              :data = "{}"
              :on-success="e => {return hanleUploadSuccess(e, item)}"
              >
                <img v-if="form[item.field]"
                  :src="form[item.field]"
                  style="width: 175px; height: 175px;"
                  alt="uploader">
                <i v-else class="el-icon-plus avatar-uploader-icon" ></i>
            </el-upload>
          </template>
          <template v-if="item.type == 'textarea'">
            <el-input
              v-model="form[item.field]"
              :placeholder="item.place"
              type="textarea"
              :rows="3" />
          </template>
      </el-form-item>
    </el-form>

    <section class="my-btn-area">
      <el-button @click="handleCancel" type="danger">重置</el-button>
      <el-button @click="handleSubmit" type="primary">提交</el-button>
    </section>
  </section>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
  import {Toast} from '@/utils/global'
  import formList from '@/utils/form'
  export default {
    name: 'MyFormDefault',
    components: {},
    props: {},
    model: {},
    computed: {
      FormModel(){
        return formList.find(kk => kk.params.includes(this.$route.path))
      },
    },
    data (){
      return {
        uploadPath: window.uploadPath,
        form: {}
      }
    },
    watch: {},
    methods: {
      /**
       * [hanleUploadSuccess 图片文件上传]
       * @return {[type]} [description]
       */
      hanleUploadSuccess(){},
      /**
       * [handleSubmit 表单提交事件]
       * @return {[type]} [description]
       */
      handleSubmit(){
        this.$refs.myFormModel.validate(valid => {
          if(valid) {
            Toast({type: 'success', msg: 'is ok'})
          } else {
            Toast({type: 'error', msg: 'is err'})
          }
        })
      },
      /**
       * [handleCancel 重置表单]
       * @return {[type]} [description]
       */
      handleCancel(){
        this.$refs.myFormModel.resetFields()
      }
    },
    created(){},
    mixins:[]
  }
</script>

<style scoped lang="scss">
@import '@/assets/style/mixin.scss';
@import '@/assets/style/color.scss';
@include b(page-form) {
  .avatar-uploader {
    width: 178px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  @include b(form-wrap) {
    width: 60%;
    margin: 15px 0;

    @include e(tips) {
      color: $t-999;
    }
  }
  @include b(btn-area) {
    justify-content: flex-start;
    .el-button:first-of-type {
      margin-left: 20%;
    }
  }
}
</style>
