<template>
    <section class='my-ad-setting'>
        <header class="my-set-header">
            <section class="my-set-header__lf">
                <span class="my-set-hader__lf--title">我的广告投放设置</span>
            </section>
        </header>
        <section class="my-ad-card">
            <section class="my-ad-card__lf">
                <img class="my-ad-card__lf--logo" src="" alt="logo">
            </section>
            <section class="my-ad-card__center">
                <h6 class="my-ad-card__center--title">标题</h6>
                <p class="my-ad-card__center--desc">
                    <span class="is-primary">多图类广告</span>
                    <time class="is-undisable">2019-04-02 17:00</time>
                </p>
                <p class="my-ad-card__center--link">
                    <span class="is-primary">检查落地页网址</span>
                </p>
            </section>
        </section>
        <section class="my-ad-form">
            <el-form
              label-width="170px">
                <section 
                    v-for="(item, index) in FormList"
                    :key="index"
                    class="my-ad-form__area">
                    <el-form-item
                        v-for="(sub, sid) in item"
                        :key="sid"
                        :label="sub.label">
                        <template v-if="sub.type == 'icon'">
                            <span>80000元</span>
                        </template>
                        <template v-else-if="sub.type == 'select'">
                            <el-select
                                v-model="form[sub.field]">
                                <el-option label="低价广告" :value="0" ></el-option>
                                <el-option label="高价广告" :value="1" ></el-option>
                            </el-select>
                        </template>
                        <template v-else-if="sub.type == 'input'">
                            <el-input 
                                v-model="form[sub.field]"
                                :placeholder="'请编辑' + sub.label"
                                class="my-ad-form__area--input" />
                            <span class="is-primary">{{sub.tips}}</span>
                        </template>
                        <template v-else-if="sub.type == 'calc'">
                            <el-input
                                v-model="form[sub.field]" 
                                :placeholder="'请编辑' + sub.label"
                                class="my-ad-form__area--input" />
                            <span class="is-danger">=投放1666次</span>
                        </template>
                        <template v-else-if="sub.type == 'checkbox'">
                            <el-checkbox-group
                                v-model="form[sub.field]">
                                <el-checkbox 
                                    v-for="(ss, sd) in sub.list"
                                    :key="sd"
                                    :label="ss.value">
                                    {{ss.label}}
                                </el-checkbox>
                            </el-checkbox-group>
                        </template>
                        <template v-else-if="sub.type == 'timerange'">
                            <el-time-picker 
                                v-model="temp_time"
                                is-range
                                range-separator="至"
                                start-placeholder="开始时间"
                                end-placeholder="结束时间"
                                class="my-ad-form__area--input"
                                value-format="HH:mm:ss">
                            </el-time-picker>
                            <el-button @click="handleAddTime" size="small">添加</el-button>
                            <ul class="my-ad-form__time-list">
                                    <li 
                                        v-for="(tt, tl) in temp_time_range" 
                                        :key="tl">
                                        <span class="time">开始时间: {{tt[0]}} -- 结束时间: {{tt[1]}}</span>
                                        <span @click="handleClickDel(tl)" class="btn-mini">删除</span>
                                    </li>
                            </ul>
                        </template>
                        <template v-else>
                            <el-date-picker
                                v-model="form[sub.field]"
                                placeholder="请选择开始投放时间">
                            </el-date-picker>
                        </template>
                    </el-form-item>
                </section>
            </el-form>
        </section>

        <section class="my-btn-area">
            <el-button type="primary">开启广告投放</el-button>
            <el-button type="danger">返回</el-button>
        </section>
    </section>
</template>

<script>
 const FormList = [
    [
        {
            label: '可用余额',
            field: 'easy',
            type: 'icon'
        },
        {
            label: '广告投放',
            field: 'type',
            type: 'select',
            list: []
        },
        {
            label: '单次点击扣费(元)',
            field: 'onceMoney',
            type: 'input',
            tips: '只有在被用户分享广告至少被查看一次后才扣费, 单个用户分享多次进扣费一次.'
        },
        {
            label: '本次计划投放金额(元)',
            field: 'onlyMoney',
            type: 'calc'
        }
    ],
    [
        {
            label: '选择投放日',
            field: 'dates',
            type: 'checkbox',
            list: [
                {
                    label: '周一',
                    value: 1
                },
                {
                    label: '周二',
                    value: 2
                },
                {
                    label: '周三',
                    value: 3
                },
                {
                    label: '周四',
                    value: 4
                },
                {
                    label: '周五',
                    value: 5
                },
                {
                    label: '周六',
                    value: 6
                },
                {
                    label: '周日',
                    value: 7
                }
            ]
        },
        {
            label: '每日投放时间段',
            type: 'timerange',
            field: 'timerange'
        },
        {
            label: '开始投放日期',
            type: 'date',
            field: 'date'
        },
    ],
 ]
 export default{
    name: 'myAdSetting',
    components: {},
    props: {},
    watch: {},
    computed:{},
    data(){
        return {
            FormList,
            form: {
                easy: '',
                type: 0,
                onceMoney: '',
                onlyMoney: '',
                dates: [],
                timerange: '',
                date: ''
            },

            temp_time: '',
            temp_time_range: []
        }
    },
    methods: {
        handleAddTime(){
            this.temp_time && this.temp_time_range.push(this.temp_time)
            setTimeout(() => {
                this.temp_time = ''
            }, 300)
        },
        handleClickDel(index){
            this.temp_time_range.splice(index, 1)
        }
    },
    created(){},
    mixins: []
 }
</script>

<style scoped lang='scss'>
@import '@/assets/style/color.scss';
@import '@/assets/style/mixin.scss';
@include when(primary) {
    color: $-sub;
}
@include when(undisable) {
    color: $t-999;
}
@include when(danger) {
    color: $danger;
}
@include b(ad-setting) {
    @include b(set-header) {
        width: inherit;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid $b-base;
    }
    @include b(ad-card) {
        @include flex($dir: row, $align: stretch);
        width: inherit;
        height: 100%;
        padding: 15px 0;
        border-bottom: 1px solid $b-base;
        @include e(lf) {
            width: 18%;
            height: 120px;
            overflow: hidden;
            & > img {
                width: 100%;
            }
        }
        @include e(center) {
            @include flex($dir: column, $justify: space-between);
            flex: 1;
            margin-left: 15px;
            padding: 10px 0;
            box-sizing: border-box;
            @include m(desc) {
                flex: 1;
                font-size: 14px;
                line-height: 2;
                & > span {
                    margin-right: 15px;
                }
            }
            @include m(link) {
                font-size: 12px;
                & > span {
                    padding: 2px 8px;
                    background-color: #E5F4FF;
                    border-radius: 12px;
                }
            }
        }
    }
    @include b(ad-form) {
        @include e(area) {
            padding: 15px 0;
            border-bottom: 1px solid $b-base;

            &:last-of-type {
                padding-bottom: 0;
                border-bottom: none;
            }

            @include m(input) {
                width: 320px;
                margin-right: 10px;
            }
        }
        @include e(time-list) {
            & > li {
                height: 45px;
                line-height: 45px;

                & > span.time {
                    font-size: 14px;
                }
                & > span.btn-mini {
                    margin-left: 10%;
                    padding: 2px 8px;
                    border-radius: 4px;
                    border: 1px solid $danger;
                    color: $danger;
                    
                    &:hover {
                        cursor: pointer;
                        transition: color .5s ease;
                    }
                }
            }
        }
    }
}
</style>