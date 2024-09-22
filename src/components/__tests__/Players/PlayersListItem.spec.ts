import { mount } from '@vue/test-utils'
import PlayersListItem from '@/components/Players/PlayersListItem.component.vue'
import { describe, it, expect } from 'vitest'

describe('PlayersListItem', () => {
  const mockPlayer = {
    birthDate: '1999-10-07',
    firstName: 'Noah',
    lastName: 'Alvandi',
    city: 'Jönköping'
  }

  it('renders player data correctly', () => {
    const wrapper = mount(PlayersListItem, {
      props: { player: mockPlayer }
    })

    expect(wrapper.text()).toContain('1999-10-07')
    expect(wrapper.text()).toContain('Noah')
    expect(wrapper.text()).toContain('Alvandi')
    expect(wrapper.text()).toContain('Jönköping')
  })
})
