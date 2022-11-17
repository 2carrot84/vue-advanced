<template>
  <div>
    <section>
      <user-profile :info="userInfo">
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
        <template slot="time">Posted {{fetchedItem.time_ago}}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <div v-html="fetchedItem.content"></div>
      <!--      <div v-for="comment in fetchedItem.comments" v-html="comment.content"></div>-->
    </section>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import UserProfile from "@/components/UserProfile";

export default {
  name: "ItemView",
  components: {UserProfile},
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    this.$store.dispatch('FETCH_ITEM', this.$route.query.id);
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 0.7rem;
}
</style>