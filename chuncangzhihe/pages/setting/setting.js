/**
 * create by hujunhao 2019.6.26
 * 数据设置页
 */

import MiniUtils from '../../utils/index'
import Requester from '../../http/requester';
import API from '../../http/apis';
import BASE_URL from '../../http/baseUrl'

Page({
    data: {
        phase: '',
        date: '',
        week: '',
        // ff: [false, false, false, false, false],
        // lf: [false, false]
    },
    onLoad() {},
    onShow() {
        this.settingDate()
    },

    //设置日期
    settingDate(date) {
        if (MiniUtils.Utils.isEmpty(date)) {
            date = date || ''
        }

        let today = MiniUtils.Utils.getTimes({
            time: date,
            style: 'Y-M-D&W'
        })

        let ta = today.split('&')
        this.setData({
            date: ta[0],
            week: ta[1]
        })
    },

    bindKeyInput(e) {
        // let {
        //     detail,
        //     target
        // } = e
        // let number = target.dataset.number || ''
        // let value = detail.value
        // console.log('ee', number, value)

        // let newFF = []
        // for (let i = 0; i < 5; i++) {
        //     newFF.push(i - 1 == parseInt(number))
        // }

        // this.setData({
        //     ff: newFF
        // })
    },

    // //新增数据
    // addNew() {
    //     console.log('新增数据')
    // },

    bindDateChange(e) {
        const val = e.detail.value
        if (!MiniUtils.Utils.isEmpty(val)) {
            this.settingDate(val)
        }
    },

    //保存
    save() {
        wx.showToast({
            title: '保存成功',
            duration: 2000
        })

    },

    bindWeekChange(e) {
        console.log(e.detail.value)
    }
})