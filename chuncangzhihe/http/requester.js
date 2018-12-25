import BASE_URL from './baseUrl'
import MiniUtils from '../utils/index'
// import Types from '../utils/types'
class Requester {

    //格式化兼容数据
    formatParams(options) {

        //请求地址的处理
        let url = options.url || ''
        let httpRule = /^https?:\/\/(.*)$/
        // TODO:如果url未带域名，则拼接域名
        if (!httpRule.test(url)) {
            url = BASE_URL.API_BASE_URL + options.url
        }
        // let tokenStorage = MiniUtils.Storage.get(Types.TOKEN)
        // let token = tokenStorage.token || ''
        url += url.includes('?') ? '&' : '?'
        options.url = `${url}&t=${Date.now()}`

        //请求头信息设置
        options.header = options.header || {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
        
        //HTTP 请求方法
        options.method = options.method || 'GET'

        //请求的参数
        options.data = options.data || {}

        //返回的数据格式
        options.dataType = options.dataType || 'json'

        //响应的数据类型 text/arraybuffer
        options.responseType = options.responseType || 'text'

        //接口调用成功的回调函数
        options.success = options.success || (result => {
            MiniUtils.Log({
                style: 'warn',
                msg: '#警告：请设置处理成功后的回调方法'
            })
        })

        //接口调用失败的回调函数
        options.fail = options.fail || (error => {
            MiniUtils.Log({
                style: 'warn',
                msg: '#警告：请设置处理失败后的回调方法'
            })
        })

        //接口调用结束的回调函数（调用成功、失败都会执行）
        options.complete = options.complete || (result => {})

        return options
    }

    //post请求数据处理
    post(options) {
        options.method = 'POST'
        let parmas = this.formatParams(options)
        return this.ajax(parmas)
    }

    //get请求数据处理
    get(options) {
        options.method = 'GET'
        let parmas = this.formatParams(options)
        return this.ajax(parmas)
    }

    //异步请求发起
    ajax(parmas) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: parmas.url,
                method: parmas.method,
                data: parmas.data,
                header: parmas.header,
                dataType: parmas.dataType,
                responseType: parmas.responseType,
                success: res => {
                    //异步请求返回的所有数据
                    let {
                        data,
                        errMsg,
                        header,
                        statusCode
                    } = res

                    //二维火服务端返回的数据
                    let {
                        code
                    } = data

                    if (+code === 1) {
                        // parmas.success(data.data)
                        resolve(data.data)
                    } else if (+code === -1) {
                        // parmas.fail(data.data)
                        reject(data.message)
                    } else {
                        // MiniUtils.Toast.show(系统错误，请重试')
                        // reject(data.message)
                        reject(data)
                    }
                }
            })
        })
    }
}

const requester = new Requester();

export default requester;
