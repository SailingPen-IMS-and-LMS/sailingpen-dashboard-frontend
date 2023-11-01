
import { reverse } from 'dns';
<template>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
</template> 

<script lang="ts">
    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale
    } from 'chart.js'
    import { Bar } from 'vue-chartjs'
    import * as chartConfig from './chartConfig.js'

    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

    export default {
        name: 'BarChart',
        components: { Bar },
        data() {
            return {
            chartData: {
                labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sept',
            'Oct',
            'Nov',
            'Dec',
        ],
        datasets: [
            {
                label: 'Online',
                backgroundColor: '#8ECDDD',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
            },
            {
                label: 'Physical',
                backgroundColor: '#A7D397',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11].map(x => 100-x),
            }
        ],
            },
            
            }
        }
    }

    export const options = {
  responsive: true,
  maintainAspectRatio: false,
};





</script>