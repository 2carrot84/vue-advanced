import bus from "@/utils/bus";

export default {
    /*created() {
        bus.$emit('start:spinner');
        this.$store.dispatch('FETCH_LIST', this.$route.name)
            .then(() => {
                console.log('fetched');
                bus.$emit('end:spinner');
            })
            .catch((error) => {
                console.error(error);
            });
    },*/
    mounted() {
        bus.$emit('end:spinner');
    }
}