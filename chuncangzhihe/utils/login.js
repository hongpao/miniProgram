/**
 * 小程序授权登录
 * create by hujunhao 2018.12.19
 */

import Utils from './utils'
import Toast from './toast'

class Login {
    //微信授权，登录
    login() {
        let _this = this
        wx.login({
            success(res) {
                if (!Utils.isEmpty(res.code)) {
                    //获取code成功，调后端接口获取token
                    _this.authorization(res.code)
                } else {
                    //出错提示
                    Toast.show(res.errMsg)
                }
            }
        })
    }

    //用微信授权后获取的code，与后端交换，获取token
    authorization(code) {
        console.log('【wx.login.code】', code)
    }

    //校验已存token是否有效
    checkToken() {}
}

const login = new Login()

export default login