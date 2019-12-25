// pages/mahjong/mahjong.js
import MiniUtils from '../../utils/index'
import Types from '../../utils/types'

Page({
    /**
     * 页面的初始数据
     */
    data: {
        isStart: false, //是否已经开桌
        isShowBox: false, //是否显示增加本轮成绩的弹层
        basePrise: '',
        user: ['', '', '', ''],
        turns: [],
        thisTurn: [],
        dealer: {
            name: '台板费',
            turn: []
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let turns = MiniUtils.Storage.get(Types.MAHJONG)
        this.setData({
            turns
        })
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

        let rule = /^\d+$/
        let isStart = true

        if (MiniUtils.Utils.isEmpty(basePrise) && rule.test(basePrise)) {
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
    },

    //片数
    changeVal2(e) {
        let rule = /^\d+$/
        let value = e.detail.value

        if (!MiniUtils.Utils.isEmpty(value) && rule.test(value)) {
            let {
                thisTurn
            } = this.data
            let index = e.target.dataset.index
            thisTurn[index] = value
            this.setData({
                thisTurn
            })
        } else {
            MiniUtils.Toast.show('格式不对啦')
        }
    },

    //增加本轮成绩
    confirmThisTurn() {
        let {
            turns,
            thisTurn
        } = this.data

        let isOK = true

        if (thisTurn.length === 4) {
            for (let item of thisTurn) {
                if (MiniUtils.Utils.isEmpty(item)) {
                    isOK = false
                }
            }
        } else {
            isOK = false
        }

        if (isOK) {
            turns.push(thisTurn)
            this.setData({
                turns,
                thisTurn: [],
                isShowBox: false
            })

            MiniUtils.Storage.set(Types.MAHJONG, turns)
        } else {
            MiniUtils.Toast.show('缺少成绩')
        }
    }
})