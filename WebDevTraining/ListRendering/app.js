const app = Vue.createApp({
    data() {
        return {
            show: true,
            books: [
                { title: 'Pemrograman Web', author: 'Ridho'},
                { title: 'TKITI', author: 'Sambo'},
                { title: 'TKK', author: 'Annisa'}
            ]
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