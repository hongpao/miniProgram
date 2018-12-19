/**
 * create by hujunhao 2018.12.19
 * 首页
 */

import MiniUtils from '../../utils/index'

Page({
  data: {
    swiper: {
      indicatorDots: true, //是否显示面板指示点
      indicatorColor: "rgba(0, 0, 0, .3)", //指示点颜色
      indicatorActiveColor: "#000000", //当前选中的指示点颜色
      autoplay: true, //是否自动切换
      interval: 5000, //自动切换时间间隔
      duration: 1000, //滑动动画时长
      circular: true, //是否采用衔接滑动
      vertical: false, //滑动方向是否为纵向
      previousMargin: '0px', //前边距，可用于露出前一项的一小部分
      nextMargin: '0px', //后边距，可用于露出后一项的一小部分
      displayMultipleItems: 1, //同时显示的滑块数量
      skipHiddenItemLayout: false //是否跳过未显示的滑块布局
    },
    banner: [{
      imageSrc: 'https://assets.2dfire.com/frontend/8639997db3f70957df987f3f5b4dfcae.jpg',
      text: '',
      url: ''
    }, {
      imageSrc: 'https://assets.2dfire.com/frontend/7b0b6ac483cb0b1bc681eef6e559a161.jpg',
      text: '',
      url: ''
    }, {
      imageSrc: 'https://assets.2dfire.com/frontend/9e5cfb05270dd3e29874e869d595ec40.jpg',
      text: '',
      url: ''
    }]
  },
  onLoad: function () {
    // MiniUtils.Login.login()
  }
})