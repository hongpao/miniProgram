/**
 * Created by hongpao on 2018/11/26.
 * 小程序 工具类方法判断
 */

class Utils {
    isEmpty(v) {
        //获取准确的数据类型
        let type = Object.prototype.toString.call(v)

        // null 和 undefined 是 "空的"
        if (type === '[object Null]' || type === '[object Undefined]') {
            return true
        }

        //对象类型
        if (type === '[object Object]') {
            return Object.keys(v).length === 0
        }

        //数组类型 【tip】只判断一维数组
        if (type === '[object Array]') {
            return v.length === 0
        }

        //字符串，去空格后判断
        if (type === '[object String]') {
            return v.trim().length === 0
        }

        /**
         * 如果类型为数字类型
         * 1. 如果是 NaN  看为空
         * 2. ===0 不为空
         */
        if (type === '[object Number]') {
            return isNaN(v)
        }

        //布尔值不可能为空, false 也不是空
        if (type === '[object Boolean]') {
            return false
        }

        /*
         * 其余类型（function、date、RegExp），不存在判断空值的意义，所以一律返回true
         * */
        return true
    }

    /*
     * 时间格式化
     * Y-M-D（默认）
     * Y-M-D h:m:s
     * Y/M/D
     * Y/M/D h:m:s
     * W
     * h:m
     * */
    getTimes(options) {
        options = options || {}
        let time = options.time || ''
        let t
        if (time !== '') {
            t = new Date(time)
        } else {
            t = new Date()
        }
        let Y = t.getFullYear()
        let M = this.formatNumber(t.getMonth() + 1)
        let D = this.formatNumber(t.getDate())
        let W = this.getWeek(t.getDay())
        let h = this.formatNumber(t.getHours())
        let m = this.formatNumber(t.getMinutes())
        let s = this.formatNumber(t.getSeconds())

        let T = options.style || 'Y-M-D'

        if (T.indexOf('Y') > -1) {
            T = T.replace('Y', Y)
        }
        if (T.indexOf('M') > -1) {
            T = T.replace('M', M)
        }
        if (T.indexOf('D') > -1) {
            T = T.replace('D', D)
        }
        if (T.indexOf('W') > -1) {
            T = T.replace('W', W)
        }
        if (T.indexOf('h') > -1) {
            T = T.replace('h', h)
        }
        if (T.indexOf('m') > -1) {
            T = T.replace('m', m)
        }
        if (T.indexOf('s') > -1) {
            T = T.replace('s', s)
        }

        return T
    }

    /*
     * 月日时分秒，位数补足
     * */
    formatNumber(v) {
        v = v.toString()
        return v[1] ? v : `0${v}`
    }

    /*
     * 根据时间获取星期
     * */
    getWeek(v) {
        v = parseInt(v)
        let weekAry = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
        return weekAry[v]
    }

    /**
     * 微信版本号比较
     * @param {*} version 现版本
     * @param {*} supVersion 最低版本
     */
    compareVersion(supVersion) {
        let version = wx.getSystemInfoSync().SDKVersion || ''
        let v1Arr = version.split('.')
        let v2Arr = supVersion.split('.')
        let len = Math.max(v1Arr.length, v2Arr.length)

        while (v1Arr.length < len) {
            v1Arr.push('0')
        }
        while (v2Arr.length < len) {
            v2Arr.push('0')
        }

        for (let i = 0; i < len; i++) {
            let num1 = parseInt(v1Arr[i])
            let num2 = parseInt(v2Arr[i])

            if (num1 > num2) {
                return 1
            }
            if (num1 < num2) {
                return -1
            }
        }
        return 0
    }

    /*
     * 金额转换 分转元 （小数点默认保留2位数）
     * @param price 以分为单位的金额，默认是0
     * @param util 金额单位，默认为空
     * */
    fenToYuan(options) {
        let {
            price = 0, util = ''
        } = options
        let p = price.toString()
        let l = p.length
        let y = ''

        if (l > 2) {
            let s = p.substring(0, l - 2)
            let e = p.substring(l - 2)
            y = `${s}.${e}`

        } else if (l === 2) {
            y = `0.${p}`

        } else if (l === 1) {
            y = `0.0${p}`
        }

        return util + y
    }

    /*
     * 金额转换 元转分
     * @param price 以元为单位的金额，默认是0
     * */
    yuanTofen(price) {
        price = price || 0
        let f = ''

        //非0情况下才正常处理
        if (price) {
            //金额转化为字符串处理
            price = price.toString()

            //如果是正数，则改为两位小数
            if (!price.includes('.')) {
                price += '.00'
            }

            //分割正数与小数
            let pAry = price.split('.')

            //获取整数位
            f += parseInt(pAry[0]) ? pAry[0] : ''

            /**
             * 小数位如果小于等于2位，则直接拼接
             * 大于2位后，拼接为小数
             */
            if (pAry[1].length <= 2) {
                f += `${pAry[1]}0`.substr(0, 2)
            } else {
                f += pAry[1].substr(0, 2)
                f += `.${pAry[1].substring(2)}`
            }

            if (!price.includes('.')) {
                return parseInt(f)
            } else {
                return parseFloat(f)
            }
        } else {
            return 0
        }
    }

    /**
     * 跳转地址参数拼接
     */
    formatUrl(url, options = {}) {
        options = options || {}
        let paramsAry = Object.keys(options)
        let urlParams = []

        paramsAry.map((v) => {
            urlParams.push(`${v}=${options[v]}`)
        })

        if (urlParams.length > 0) {
            url += url.includes('?') ? '&' : '?'
            url += urlParams.join('&')
        }

        return url
    }

    /*
     * 获取完整请求地址后的参数
     * @params 需要处理的地址
     */
    queryParams(params) {
        // let params = window.location.search
        let paramsAry = params.split('?')[1] || ''
        let paramsList = paramsAry.split('&') || []
        let objs = {}

        paramsList.map((item) => {
            let ary = item.split('=')
            objs[ary[0]] = ary[1]
        })

        return objs
    }
}

const utils = new Utils()
export default utils