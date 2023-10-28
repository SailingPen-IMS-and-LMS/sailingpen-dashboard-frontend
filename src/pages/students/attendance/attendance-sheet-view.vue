<!-- <template>
  <div class="flex justify-center items-center h-screen">
    <canvas ref="chartCanvas" width="400" height="400"></canvas>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

export default {
  setup() {
    const chartCanvas = ref(null);

    onMounted(() => {
      const ctx = chartCanvas.value.getContext('2d');

      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Paid', 'Not Paid'],
          datasets: [
            {
              label: 'Monthly Payment Status',
              data: [70, 30], // Dummy data, you can replace with actual data
              backgroundColor: ['#36A2EB', '#FF6384'],
            },
          ],
        },
      });
    });

    return { chartCanvas };
  },
};
</script>

<style scoped>
</style> -->

<template>hi</template>
