const app = Vue.createApp({
    data() {
        return {
            show: true,
            title: 'Pemrograman Web',
            author: 'Sulthan Akmal',
            age: 19,
            x: 0,
            y: 0
        }
    },
    methods: {
        changeShow() {
            this.show = !this.show
        },
        handleEvent(e) {
            console.log('event')
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})
app.mount('#app')