/**
 * create by hujunhao 2018.12.19
 * 首页
 */

import MiniUtils from '../../utils/index'
import Requester from '../../http/requester';
import API from '../../http/apis';
import BASE_URL from '../../http/baseUrl'

Page({
  data: {
    info: []
  },
  onLoad: function () {
    // MiniUtils.Login.login()
  },
  onShow() {
    const _this = this
    Requester.get({
      url: API.GET_MAIN,
    }).then((result) => {

      let {
        imagesAry = []
      } = result
      let inputInfo = []
      for (let v of imagesAry) {
        inputInfo.push({
          imagePath: `${BASE_URL.API_BASE_URL}/images/nba/${v}`,
          path: '',
          name: v.split('.')[0]
        })
      }
      _this.setData({
        info: inputInfo
      })
    }).catch((msg) => {

    })
  }
})