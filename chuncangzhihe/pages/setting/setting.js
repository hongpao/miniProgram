/**
 * create by hujunhao 2019.6.26
 * 数据设置页
 */

import MiniUtils from '../../utils/index'
import Requester from '../../http/requester';
import API from '../../http/apis';
import BASE_URL from '../../http/baseUrl'

const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
    years.push(i)
}

for (let i = 1; i <= 12; i++) {
    months.push(i)
}

for (let i = 1; i <= 31; i++) {
    days.push(i)
}

Page({
    data: {
        years: years,
        year: date.getFullYear(),
        months: months,
        month: 2,
        days: days,
        day: 2,
        value: [9999, 1, 1]
    },
    onLoad: function () {},
    onShow() {

    },

    //新增数据
    addNew() {
        console.log('新增数据')
    },

    bindChange: function (e) {
        const val = e.detail.value
        this.setData({
            year: this.data.years[val[0]],
            month: this.data.months[val[1]],
            day: this.data.days[val[2]]
        })
    }
})