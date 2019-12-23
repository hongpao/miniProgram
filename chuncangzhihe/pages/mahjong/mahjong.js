// pages/mahjong/mahjong.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isStart: false //是否已经开桌
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

    //开桌
    toStart() {
        this.setData({
            isStart: true
        })
    }
})