<template>
  <check-box v-model="checked"></check-box>
</template>

<script>
import CheckBox from "@/components/CheckBox";

export default {
  name: 'App',
  components: {
    CheckBox
  },
  data() {
    return {
      checked: false,
    }
  },
  methods: {

  }
};
</script>

<style>
</style>
