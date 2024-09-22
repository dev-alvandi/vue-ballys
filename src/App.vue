<template>
  <!-- show the Players component -->
  <PlayersList :players="players" :showArrowUp="showArrowUp" @toggleArrow="toggleArrow" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

import PlayersList from '@/components/Players/PlayersList.component.vue'
import { FETCHING_ALL_PLAYERS } from './api'
import type { PlayerType } from './types'

// true if the arrow point down (in decending order)
const showArrowUp = ref(true)

// fetching data from backend
const players = ref([])

const toggleArrow = () => {
  showArrowUp.value = !showArrowUp.value
  players.value.reverse()
}

// Function to fetch players data from backend
const fetchPlayers = async () => {
  try {
    const response = await axios.get(FETCHING_ALL_PLAYERS)
    const formatedData = response.data.map((player: PlayerType) => ({
      ...player,
      birthDate: player.birthDate
    }))

    players.value = formatedData
  } catch (error) {
    console.error('Error fetching players:', error)
  }
}

// Fetch data when the component is mounted
onMounted(fetchPlayers)
</script>
