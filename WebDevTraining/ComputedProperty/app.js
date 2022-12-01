const app = Vue.createApp({
    data() {
        return {
            show: true,
            books: [
                { title: 'Pemrograman Web', author: 'Ridho', isFav: true},
                { title: 'TKITI', author: 'Sambo', isFav: true},
                { title: 'TKK', author: 'Annisa', isFav: true}
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
    },
    computed: {
        filteredBooks() {
            return this.book.filter((book) => book.isfav)
        }
    }
})
app.mount('#app')