<template>
  <Line :data="data" :options="options" />
</template>

<script lang="ts">

    import {
        Chart as ChartJS,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    } from 'chart.js'
    import { Line } from 'vue-chartjs'
    import * as chartConfig from './chartConfig.js'

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    )

    export default {
        name: ' LineChart',
        components: { Line },
        data() {
            return {
                data: {
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
                            data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 30)
                        },
                        {
                            label: 'Physical',
                            backgroundColor: '#A7D397',
                            data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 60),
                        },

                    ],
                },
                chartOptions: {}
            }
        },
    }

</script>
