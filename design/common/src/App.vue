<template>
  <div id="app">
    <app-header :title="appTitle"></app-header>
    <app-content :items="items" @renew="renewItems"></app-content>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppContent from "@/components/AppContent";

export default {
  name: 'App',
  components: {
    AppHeader,
    AppContent
  },
  data() {
    return {
      appTitle: 'Common Approach',
      items: [10, 20, 30],
    }
  },
  methods: {
    renewItems() {
      this.items = [40, 50, 60];
    }
  }
}
</script>

<style>
</style>
