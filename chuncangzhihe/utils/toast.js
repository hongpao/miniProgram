/**
 * created by hongpao 2018.11.29
 * 消息提示和开关
 *  */

class Toast {
    formatParams(v) {
        let t = Object.prototype.toString.call(v)
        let typeAry = ['[object Null]', '[object Undefined]', '[object String]']
        let options = {}

        if (typeAry.includes(t)) {
            options.title = v || ''
        } else {
            Object.assign(options, v)
        }

        //提示的内容
        options.title = options.title || ''

        //图标
        options.icon = options.icon || 'none'

        //自定义图标的本地路径，image 的优先级高于 icon
        options.image = options.image || ''

        //提示的延迟时间
        options.duration = options.duration || 1500

        //是否显示透明蒙层，防止触摸穿透
        options.mask = options.mask || false

        //接口调用成功的回调函数
        options.success = options.success || (res => {})

        //接口调用失败的回调函数
        options.fail = options.fail || (res => {})

        //接口调用结束的回调函数（调用成功、失败都会执行）
        options.complete = options.complete || (res => {})

        return options
    }
    show(v) {
        let options = this.formatParams(v)
        wx.showToast({
            title: options.title,
            icon: options.icon,
            duration: options.duration,
            mask: options.mask,
            success: options.success,
            fail: options.fail,
            complete: options.complete
        })
    }
    hide(v) {
        let options = this.formatParams(v)
        wx.hideToast({
            success: options.success,
            fail: options.fail,
            complete: options.complete
        })
    }
}

const toast = new Toast()

export default toast