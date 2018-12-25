Component({
    options: {
        addGlobalClass: true, // 全局样式生效
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    /**
     * 组件的属性列表
     */
    properties: {
        name: {
            type: Array
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        as: 190
    },

    /**
     * 组件的方法列表
     */
    methods: {
        pickerGetName(event) {
            // console.log(this.data.name[+event.detail.value])
            this.triggerEvent('acf', {
                hpp: this.data.name[+event.detail.value]
            }, {
                bubbles: false, //事件是否冒泡
                composed: false, //事件是否可以穿越组件边界，为false时，事件将只能在引用组件的节点树上触发，不进入其他任何组件内部
                capturePhase: false //事件是否拥有捕获阶段
            })
        },
        ffg() {
            console.log('wdfdfgsdgfsdfgsfsd')
            this.triggerEvent('acf', {
                as: 12223
            }, {})
        },
        hahah_o(e){
            this.triggerEvent('acf', {
                as: e.detail.as
            }, {})
        }
    },

    /**
     * 组件实例刚刚被创建好时
     */
    created() {},

    /**
     * 在组件完全初始化完毕、进入页面节点树后 important
     */
    attached() {},

    /**
     * 在组件离开页面节点树后
     */
    detached() {}
})