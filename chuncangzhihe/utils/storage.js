/**
 * 小程序本地缓存的操作
 *  */
class Storage {
    //【同步】将数据存储在本地缓存中指定的 key 中
    set(key, options) {
        let type = Object.prototype.toString.call(options)
        if (type === '[object Object]' || type === '[object Array]') {
            try {
                wx.setStorageSync(key, options)
            } catch (e) {
                // Do something when catch error
            }
        } else {}
    }

    //【同步】从本地缓存中异步获取指定 key 的内容
    get(key) {
        try {
            let value = wx.getStorageSync(key) || {}
            return value
        } catch (e) {
            // Do something when catch error
        }
    }

    //【同步】清理本地数据缓存
    clear() {
        try {
            wx.clearStorageSync()
        } catch (e) {
            // Do something when catch error
        }
    }

    //【同步】从本地缓存中移除指定 key
    remove(key) {
        try {
            wx.removeStorageSync(key)
        } catch (e) {
            // Do something when catch error
        }
    }
}

const storage = new Storage()

export default storage