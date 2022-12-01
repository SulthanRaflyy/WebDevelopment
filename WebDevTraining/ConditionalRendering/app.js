const app = Vue.createApp({
    data() {
        return {
            show: true,
            title: 'Pemrograman Web',
            author: 'Sulthan Akmal',
            age: 19
        }
    },
    methods: {
        changeShow() {
            this.show = !this.show
        }
    }
})
app.mount('#app')