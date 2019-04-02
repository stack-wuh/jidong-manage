const menu = [
  {
      name: '广告商管理',
      alias: 'ad',
      icon: 'icon-index',
      child: [
        {
          name: '新增广告商',
          icon: '',
          path: '/ad/add',
          query: {l: '广告商管理', f: '新增广告商'},
        },
        {
          name: '广告商列表',
          icon: '',
          path: '/ad/list',
          query: {l: '广告商管理', f: '广告商列表'}
        },
      ]
    },
    {
      name: '数据统计',
      alias: 'data',
      icon: 'icon-leimupinleifenleileibie',
      path: '',
      child: [
        {
          name: '广告点击统计',
          icon: '',
          path: '/data/index',
          query: {l: '数据统计', f: '广告点击统计'},
        },
        {
          name: '广告点击明细',
          icon: '',
          path: '/data/list',
          query: {l: '数据统计', f: '广告点击明细'},
        }
      ]
    },
    {
      name: '财务管理',
      icon: 'icon-yonghu',
      alias: 'fa',
      path: '6',
      desc: '广告代理商的财务管理菜单',
      child: [
        {
          name: '充值管理',
          icon: '',
          path: '/fa/recharge',
          query: {l: '财务管理', f: '充值管理'},
        },
        {
          name: '充值记录',
          icon: '',
          path: '/fa/list',
          query: {l: '财务管理', f: '充值记录'}
        },
        {
          name: '收益明细',
          icon: '',
          path: '/user/business',
          query: {l: '财务管理', f: '收益明细'}
        }
      ]
    },
    {
      name: '广告投放',
      alias: 'ads',
      icon: 'icon-yonghu',
      child: [
        {
          name: '添加广告',
          path: '/ads/add',
          query: {l: '广告投放', f: '添加广告'}
        },
        {
          name: '我的素材',
          path: '/ads/fodder',
          query: {l: '广告投放', f: '我的素材'}
        },
        {
          name: '我的广告投放',
          path: '/ads/mine',
          query: {l: '广告投放', f: '我的广告投放'},
        }
      ]
    },
    {
      name: '财务管理',
      icon: 'icon-yonghu',
      alias: 'fau',
      desc: '登录广告商的账号之后的财务管理菜单',
      path: '6',
      child: [
        {
          name: '充值记录',
          icon: '',
          path: '/fau/user/recharge',
          query: {l: '财务管理', f: '充值记录'},
        },
        {
          name: '消费记录',
          icon: '',
          path: '/fau/user/pay',
          query: {l: '财务管理', f: '消费记录'}
        },
      ]
    },
]

export default menu
