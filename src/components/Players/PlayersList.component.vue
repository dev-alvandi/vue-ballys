<template>
  <div class="grid-container">
    <div class="grid-header flex align-center gap-half-rem">
      Birth Date
      <div class="icon-container" @click="emitToggleArrow">
        <div class="icon flex justify-center align-center" v-if="showArrowUp">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              fill="#fff"
              d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
            />
          </svg>
        </div>
        <div class="icon flex justify-center align-center" v-else>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              fill="#fff"
              d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="grid-header flex align-center">First Name</div>
    <div class="grid-header flex align-center">Last Name</div>
    <div class="grid-header flex align-center">City</div>

    <div
      v-for="(player, index) in players"
      :key="index"
      :class="['grid-row', { 'odd-row': index % 2 !== 0 }]"
    >
      <div class="grid-cell">{{ player.birthDate }}</div>
      <div class="grid-cell">{{ player.firstName }}</div>
      <div class="grid-cell">{{ player.lastName }}</div>
      <div class="grid-cell">{{ player.city }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { player } from '@/types.ts'

defineProps<{ players: player[]; showArrowUp: boolean }>()
const emit = defineEmits(['toggleArrow'])

function emitToggleArrow() {
  emit('toggleArrow')
}
</script>

<style scoped>
.grid-container {
  display: grid;
  min-width: 100%;
  overflow-x: auto;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  width: 60rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.grid-header {
  background-color: #36304a;
  color: #fff;
  padding: 16px 20px;
  font-weight: bold;
  font-size: 18px;
  word-wrap: break-word;
}

.icon-container {
  padding: 0.3rem;
  cursor: pointer;
}

.icon {
  height: 14px;
  width: 14px;
}

.grid-row {
  display: contents;
}

.grid-row > div {
  padding: 12px 15px;
  background-color: #f2f2f2;
  color: black;
}

.grid-row.odd-row > div {
  background-color: #fff;
}

.grid-row:hover > div {
  background-color: #ddd;
}

.grid-cell {
  font-size: 15px;
}
</style>
