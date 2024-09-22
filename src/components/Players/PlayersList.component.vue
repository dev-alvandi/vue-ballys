<template>
  <div class="grid-container">
    <div class="grid-header flex align-center gap-half-rem">
      Birth Date
      <div class="icon-container" @click="emitToggleArrow">
        <div class="icon flex justify-center align-center" v-if="showArrowUp">
          <font-awesome-icon :icon="['fas', 'arrow-down']" />
        </div>
        <div class="icon flex justify-center align-center" v-else>
          <font-awesome-icon :icon="['fas', 'arrow-up']" />
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
      <PlayersListItem :player="player" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PlayerType } from '@/types.ts'

import PlayersListItem from '@/components/Players/PlayersListItem.component.vue'

defineProps<{ players: PlayerType[]; showArrowUp: boolean }>()
const emit = defineEmits(['toggleArrow'])

function emitToggleArrow() {
  emit('toggleArrow')
}
</script>

<style scoped src="./playersStyle.css"></style>
