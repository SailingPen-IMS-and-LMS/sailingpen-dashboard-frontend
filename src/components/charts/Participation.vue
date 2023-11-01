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
        labels: [ 'Business Studies', 'Biology', 'ICT', 'Accounting', 'Chemistry', 'Physics', 'Combined Maths' ],
        datasets: [ { 
            backgroundColor: [
                '#EFC7C2', '#FFE5D4', '#BFD3C1', '#68A691', '#694F5D', '#575c94', 'pink',
            ],
            data: [10, 20, 15, 10, 15, 20, 20] 
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