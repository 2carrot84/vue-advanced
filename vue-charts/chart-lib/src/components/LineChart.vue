<template>
  <div style="width: 100%;">
    <canvas id="lineChart"></canvas>
  </div>
</template>

<script>
export default {
  name: "LineChart",
  mounted() {
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    new this.$_Chart(
        document.getElementById('lineChart'),
        {
          type: 'line',
          data: data,
        }
    );
  }
}
</script>

<style scoped>

</style>