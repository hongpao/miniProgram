// pages/mahjong/mahjong.js
import MiniUtils from '../../utils/index'

Page({
    /**
     * 页面的初始数据
     */
    data: {
        isStart: true, //是否已经开桌
        isShowBox: false, //是否显示增加本轮成绩的弹层
        basePrise: '',
        user: ['红袍', '蓝袍', '黄袍', '黑袍'],
        turns: [],
        dealer: {
            name: '台板费',
            turn: []
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    //改变输入框的值
    changeVal(e) {
        let type = e.target.dataset.type || 1
        let value = e.detail.value || ''
        let {
            basePrise,
            user
        } = this.data

        switch (+type) {
            case 1:
                basePrise = value.trim()
                break
            case 2:
                user[0] = value.trim()
                break
            case 3:
                user[1] = value.trim()
                break
            case 4:
                user[2] = value.trim()
                break
            case 5:
                user[3] = value.trim()
                break
        }

        this.setData({
            basePrise,
            user
        })
    },

    //开桌
    toStart() {
        let {
            basePrise,
            user
        } = this.data

        let isStart = true

        if (MiniUtils.Utils.isEmpty(basePrise)) {
            isStart = false
            MiniUtils.Toast.show('请输入台板费基数')
        }

        if (isStart) {
            for (let item of user) {
                if (MiniUtils.Utils.isEmpty(item)) {
                    isStart = false
                }
            }
            if (!isStart) {
                MiniUtils.Toast.show('请输入麻友代号')
            }
        }

        this.setData({
            isStart
        })
    },

    //新增本轮成绩
    showBox(e) {
        let status = e.target.dataset.status || '0'
        let isShowBox = +status === 1
        this.setData({
            isShowBox
        })
    }
})