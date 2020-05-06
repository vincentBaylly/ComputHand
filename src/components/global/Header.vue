<script>
    export default {
        name: 'vue-header',
        props: ['title'],
        watch: {
            title: {
                immediate: true,
                handler() {
                    document.title = this.title;
                }
            }
        },
        render () {
        },
    }
</script>
