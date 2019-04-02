import {
  validPhone
} from '@/utils/valid'

const form = [
  {
    l: '',
    f: '',
    c: '',
    params: ['用户管理'],
    list: [
      {
        label: '姓名',
        value: 'shadow',
        field: 'name',
        type: 'input',
        rule: []
      },
      {
        label: '详情',
        value: 'shadow',
        field: 'name',
        type: 'textarea',
        rule: []
      },
      {
        label: '状态',
        value: 'shadow',
        field: 'name',
        type: 'switch',
        rule: []
      },
      {
        label: '上传头像',
        value: 'shadow',
        field: 'name',
        type: 'uploadImg',
        rule: []
      },
    ],
    form: {
      name: '',
    }
  },
  {
    l: '',
    f: '',
    c: '',
    params: ['新增广告商', '/ad/add', '广告商列表'],
    list: [
      {
        label: '账户(手机号)',
        field: 'phone',
        type: 'input',
        place: '请编辑手机号',
        rule: [{required: true, validator: validPhone}]
      },
      {
        label: '登录密码',
        field: 'pwd',
        type: 'input',
        place: '请编辑登录密码',
        rule: [{required: true, message: '请编辑登录密码', trigger: ['change', 'blur']}]
      },
      {
        label: '联系人姓名',
        field: 'name',
        type: 'input',
        place: '请编辑联系人姓名',
        rule: [{required: true, message: '请编辑联系人姓名', trigger: ['change', 'blur']}]
      },
      {
        label: '公司名称',
        field: 'company',
        type: 'input',
        place: '请编辑公司名称',
        rule: [{required: true, message: '请编辑公司名称', trigger: ['change', 'blur']}]
      },
      {
        label: '营业执照',
        field: 'lisence',
        type: 'uploadImg',
        place: '请上传营业执照'
      },
      {
        label: '备注',
        field: 'remark',
        type: 'textarea',
        place: '请编辑备注'
      }
    ],
    form:{
      phone: '',
      pwd: '',
      name: '',
      company: '',
      lisence: '',
      remark: '',
    }
  },
  {
    l: '',
    f: '',
    c: '',
    params: ['充值管理', '/fa/recharge'],
    list: [
      {
        label: '广告商公司名称',
        field: 'phone',
        type: 'input',
        place: '请编辑广告商公司名称',
        rule: [{required: true, message: '请编辑广告商公司名称', trigger: ['change', 'blur']}]
      },
      {
        label: '充值金额',
        field: 'money',
        type: 'input',
        place: '请编辑充值金额',
        rule: [{required: true, message: '请编辑充值金额', trigger: ['change', 'blur']}],
        pTips: '起充金额至少1000元, 请输入1000元的整数倍'
      }
    ],
    form:{}
  },
  {
    l: '',
    f: '',
    c: '',
    params: ['添加广告', '/ads/add'],
    list: [
      {
        label: '广告标题',
        field: 'phone',
        type: 'input',
        place: '请编辑广告商公司名称',
        rule: [{required: true, message: '请编辑广告商公司名称', trigger: ['change', 'blur']}]
      },
      {
        label: '内容类型',
        field: 'money',
        type: 'select',
        place: '请编辑充值金额',
        list: [
          {
            label: '高价广告',
            value: 0
          },
          {
            label: '低价广告',
            value: 1
          }
        ],
        rule: [{required: true, message: '请编辑充值金额', trigger: ['change', 'blur']}],
      },
      {
        label: '广告引导图',
        field: 'money',
        type: 'uploadImg',
        place: '请编辑充值金额',
        rule: [{required: true, message: '请编辑充值金额', trigger: ['change', 'blur']}],
      },
      {
        label: '多图类广告',
        field: 'money',
        type: 'uploadImg',
        place: '请编辑充值金额',
        rule: [{required: true, message: '请编辑充值金额', trigger: ['change', 'blur']}],
      },
      {
        label: '落地页网址',
        field: 'money',
        type: 'input',
        place: '请编辑充值金额',
        rule: [{required: true, message: '请编辑充值金额', trigger: ['change', 'blur']}],
      },
      {
        label: '广告简介',
        field: 'money',
        type: 'textarea',
        place: '请编辑充值金额',
        rule: [{required: true, message: '请编辑充值金额', trigger: ['change', 'blur']}],
      },
    ],
    form:{}
  }
]

export default form
