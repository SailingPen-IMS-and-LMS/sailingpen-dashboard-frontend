<template>
    <Pie
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
</template>  

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, ArcElement, Legend, CategoryScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
  name: 'PieChart',
  components: { Pie },
  data() {
    return {
      chartData: {
        labels: [ 'Online', 'Physical' ],
        datasets: [ {
            backgroundColor: [
                '#FFE5D4', '#BFD3C1'
            ],
            data: [20, 80] 
        } ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    padding: 7,
                    usePointStyle: true,
                    pointStyle: 'rectRounded' 
                }
            }
        }
      }
    }
  }
}
</script>