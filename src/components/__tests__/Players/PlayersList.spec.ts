import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PlayersList from '@/components/Players/PlayersList.component.vue'
import type { PlayerType } from '@/types'

describe('PlayersList component', () => {
  const mockPlayer: PlayerType[] = [
    { birthDate: '1999-10-07', firstName: 'Noah', lastName: 'Alvandi', city: 'Jönköping' }
  ]
  it('renders player data correctly', () => {
    const wrapper = mount(PlayersList, {
      props: { players: mockPlayer, showArrowUp: true }
    })

    expect(wrapper.text()).toContain('1999-10-07')
    expect(wrapper.text()).toContain('Noah')
    expect(wrapper.text()).toContain('Alvandi')
    expect(wrapper.text()).toContain('Jönköping')
  })

  it('emits toggleArrow event when icon clicked', async () => {
    const wrapper = mount(PlayersList, {
      props: { players: mockPlayer, showArrowUp: true }
    })

    await wrapper.find('.icon-container').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('toggleArrow')
  })
})
