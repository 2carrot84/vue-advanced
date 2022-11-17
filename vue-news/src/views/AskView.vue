<template>
  <div>
<!--    <div v-for="item in ask">{{item.title}}</div>-->
    <p v-for="item in ask">
      <router-link :to="item.url">{{ item.title }}</router-link>
      <small>{{ item.time_ago }} by
        <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "AskView",
  created() {
    this.$store.dispatch('FETCH_ASK')
  },
  computed: {
    ...mapState({
      ask: state => state.ask
    })
    // ask() {
    //   return this.$store.state
    // }
  }
};
</script>
<style scoped>
</style>