<template>
  <div>
    <user-profile></user-profile>
  </div>
</template>

<script>
import UserProfile from "@/components/UserProfile";
export default {
  name: "UserView",
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  },
  components: {
    UserProfile
  }
};
</script>

<style scoped>

</style>