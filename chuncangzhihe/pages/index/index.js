/**
 * create by hujunhao 2019.6.28
 * 首页
 */

import MiniUtils from '../../utils/index'
import Requester from '../../http/requester';
import API from '../../http/apis';
import BASE_URL from '../../http/baseUrl'

Page({
    data: {
        imgUrls: ['../../images/WechatIMG2.jpeg', '../../images/WechatIMG3.jpeg', '../../images/WechatIMG1.jpeg'],
        swiper: {
            indicatorDots: false,
            autoplay: true,
            interval: 3000,
            duration: 1000,
        },
        apps: [{
            logo: 'hmjsq',
            name: '杭麻计算器',
            route: 'mahjong'
        }]
    },
    onLoad() {},
    onShow() {},

    //页面跳转
    routeTo(){
        MiniUtils.Router.navigateTo('mahjong')
    }
})