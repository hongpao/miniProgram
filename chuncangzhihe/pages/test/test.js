Page({

    /**
     * 页面的初始数据
     */
    data: {
        screenWidth: 0, //屏幕宽度
        dragonPosition: 'dragon-on-left',
        an: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        index: 0,
        count: 0
    },

    // 点赞
    comeOn() {
        let {
            index,
            count
        } = this.data

        // 气泡循环点击设置
        index = index > 19 ? 0 : index

        // 初始化动效参数
        let ty = -30,
            tx = 0,
            op = 0.9

        //创建一个动画实例 animation。
        let aimation = wx.createAnimation({
            duration: 400, // 动画持续时间
            timingFunction: 'linear' // 定义动画效果，当前是匀速
        })

        for (let i = 0; i < 10; i++) {
            aimation.translateY(ty).translateX(tx).scale(1.5).opacity(op).step()
            // aimation.opacity(0).step()
            // aimation.translateY(0).translateX(0).step()
            // aimation.opacity(1).step()
            
            //Y轴偏移
            ty -= 20

            //X轴偏移
            let x = parseInt(Math.random() * 20)
            if (x % 2 == 0) {
                tx += x
            } else {
                tx -= x
            }

            //透明度
            op -= 0.1

        }
        aimation.opacity(0).step()
        aimation.translateY(0).translateX(0).step()
        // aimation.opacity(1).step()

        // 用setData改变当前动画
        let animationArray = new Array(10).fill({})
        animationArray[index] = aimation.export() // 通过export()方法导出数据
        this.setData({
            count: ++count,
            index: index + 1,
            an: animationArray
        })
    },

    moveDragon(e) {
        let {
            screenWidth
        } = this.data

        // 水平偏移量
        let {
            x
        } = e.detail

        this.setData({
            dragonPosition: (screenWidth / 2) > x ? 'dragon-on-left' : 'dragon-on-right'
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const _this = this
        wx.getSystemInfo({
            success(res) {
                _this.setData({
                    screenWidth: res.screenWidth
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})