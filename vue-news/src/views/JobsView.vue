<template>
  <div>
<!--    <div v-for="job in this.$store.state.jobs">{{job.title}}</div>-->
    <p v-for="item in this.$store.state.jobs">
      <a :href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }} by {{ item.domain }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "JobsView",
  computed: {
    ...mapGetters({
      fetchedJobs: "fetchedJobs",

    })
  },
  created() {
    this.$store.dispatch('FETCH_JOBS')
  }
};
</script>

<style scoped>

</style>