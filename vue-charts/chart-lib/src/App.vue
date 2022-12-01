<template>
  <div id="app">
    <h1>Chart.js</h1>
    <bar-chart v-bind:propsdata="chartDataset"></bar-chart>
    <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";

export default {
  name: 'App',
  data() {
    return {
      chartDataset: [
        {year: 2010, count: 10},
        {year: 2011, count: 20},
        {year: 2012, count: 15},
        {year: 2013, count: 25},
        {year: 2014, count: 22},
        {year: 2015, count: 30},
        {year: 2016, count: 28},
      ]
    }
  },
  components: {
    BarChart
  , LineChart
  }
}
</script>

<style>
</style>
