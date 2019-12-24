// pages/mahjong/mahjong.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isStart: false, //是否已经开桌
        basePrise: '',
        user: [{
            name: '红袍',
            turn: []
        }, {
            name: '红袍2',
            turn: []
        }, {
            name: '红袍3',
            turn: []
        }, {
            name: '红袍4',
            turn: []
        }, {
            name: '台板',
            turn: []
        }]
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
                user[0].name = value.trim()
                break
            case 3:
                user[1].name = value.trim()
                break
            case 4:
                user[2].name = value.trim()
                break
            case 5:
                user[3].name = value.trim()
                break
        }

        this.setData({
            basePrise,
            user
        })
    },

    //开桌
    toStart() {

        this.setData({
            isStart: true
        })
    }
})