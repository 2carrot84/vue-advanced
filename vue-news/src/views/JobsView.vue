<template>
  <div>
    <div v-for="job in jobs">{{job.title}}</div>
  </div>
</template>

<script>
import {fetchJobsList} from "@/api";

export default {
  name: "JobsView",
  data: function () {
    return {
      jobs: [],
    }
  },
  created() {
    fetchJobsList()
        .then(response => this.jobs = response.data)
        .catch(error => console.error(error))
  }
}
</script>

<style scoped>

</style>