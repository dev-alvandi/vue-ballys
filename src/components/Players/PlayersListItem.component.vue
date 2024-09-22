<template>
  <div class="grid-cell">{{ player.birthDate }}</div>
  <div class="grid-cell">{{ player.firstName }}</div>
  <div class="grid-cell">{{ player.lastName }}</div>
  <div class="grid-cell">{{ player.city }}</div>
</template>

<script setup lang="ts">
import type { PlayerType } from '@/types'

defineProps<{ player: PlayerType }>()
</script>

<style scoped src="./playersStyle.css"></style>
