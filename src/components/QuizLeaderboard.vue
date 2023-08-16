<script setup>
import { ref } from 'vue'

const players = ref([
  { name: 'Nethul Mihira', score: 100 },
  { name: 'Yenula Rasanjana', score: 90 },
  { name: 'Thinuli Malmi', score: 80 },
  { name: 'Harsha', score: 50 },
  { name: 'Kelum', score: 20 },
])
</script>

<template>
  <div class="leaderboard">
    <h1 class="leaderboard-title">
      Leaderboard
    </h1>
    <table class="leaderboard-table">
      <thead>
        <tr>
          <th>Place</th>
          <th>Name</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(player, index) in players" :key="player.name">
          <td>{{ index + 1 }}</td>
          <td>{{ player.name }}</td>
          <td>{{ player.score }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
.leaderboard {
  width: 100%;
  margin: auto;
  max-width: 600px;
  background-color: #f8f9fa;
  padding: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.leaderboard-title {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.leaderboard-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.leaderboard-table th, .leaderboard-table td {
  padding: 10px;
  text-align: left;
}

.leaderboard-table th {
  background-color: #e9ecef;
  font-weight: bold;
}

.leaderboard-table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
