<template>
  <div>
    <ul class="news-list">
      <li v-for="item in ItemList" class="post">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">{{ item.title }}</a>
          </p>
          <small class="link-text">
            {{ item.time_ago }}
            <template v-if="item.user">
              by <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
            </template>
            <template v-else-if="item.domain">
              by <a v-bind:href="item.url" class="link-text">{{ item.domain }}</a>
            </template>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  created() {
    const name = this.$route.name;
    let fetchName;
    if (name === 'news') {
      fetchName = "FETCH_NEWS";
    } else if (name === 'ask') {
      fetchName = "FETCH_ASK";
    } else if (name === 'jobs') {
      fetchName = "FETCH_JOBS";
    }
    this.$store.dispatch(fetchName);
  },
  computed: {
    ItemList() {
      const name = this.$route.name;
      if (name === 'news') {
        return this.$store.state.news;
      } else if (name === 'ask') {
        return this.$store.state.ask;
      } else if (name === 'jobs') {
        return this.$store.state.jobs;
      }
    }
  }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883  ;
}
.news-title {
  margin: 0px;
}
.link-text {
  color: #828282;
}
</style>