<template>
  <div style="width: 100%;">
    <canvas id="barChart"></canvas>
  </div>
</template>

<script>
export default {
  name: "BarChart",
  props: ['propsdata'],
  mounted() {
    const data = this.propsdata;
    new this.$_Chart(
        document.getElementById('barChart'),
        {
          type: 'bar',
          data: {
            labels: data.map(row => row.year),
            datasets: [
              {
                label: 'Acquisitions by year',
                data: data.map(row => row.count)
              }
            ]
          }
        }
    );
  }
}
</script>

<style scoped>

</style>