/**
 * 小程序路由跳转用
 * created by hongpao 2019.12.23
 */

import Utils from './utils'

class Router {
    /**
     * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。
     */
    navigateBack(options = {}) {
        let delta = options.delta || 1
        wx.navigateBack({
            delta
        })
    }

    /**
     * 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。
     */
    navigateTo(url, options) {
        url = this.getIntegralUrl(url)
        wx.navigateTo({
            url
        })
    }

    /**
     * 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
     */
    redirectTo(url, options) {
        url = this.getIntegralUrl(url)
        wx.redirectTo({
            url
        })
    }

    /**
     * 关闭所有页面，打开到应用内的某个页面
     */
    reLaunch() {

    }

    /**
     * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
     */
    switchTab() {

    }

    getIntegralUrl(url) {
        return `/pages/${url}/${url}`
    }

}

const router = new Router()

export default router