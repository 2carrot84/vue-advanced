<template>
  <div>
    <div v-for="user in this.$store.state.news">{{ user.title }}</div>
  </div>
</template>

<script>
// import {fetchNewsList} from "@/api";

export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
    // fetchNewsList()
    //     .then(response => this.users = response.data)
    //     .catch(error => {
    //       console.error(error);
    //     });
  },
  name: "NewsView",
  components: {}
};
</script>

<style scoped>

</style>