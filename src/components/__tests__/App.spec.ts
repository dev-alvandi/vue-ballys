import { mount } from '@vue/test-utils'
import MockAdapter from 'axios-mock-adapter'
import { beforeEach, describe, it, expect } from 'vitest'
import axios from 'axios'

import App from '@/App.vue'
import { FETCHING_ALL_PLAYERS } from '@/api'
import PlayersListItem from '@/components/Players/PlayersListItem.component.vue'

const mockPlayers = [
  { birthDate: '1999-10-01', firstName: 'Noah', lastName: 'Alvandi', city: 'Jönköping' },
  { birthDate: '1985-05-05', firstName: 'Alice', lastName: 'Davidsson', city: 'Skövde' }
]

describe('App Component', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axios)
    mock.onGet(FETCHING_ALL_PLAYERS).reply(200, mockPlayers)
  })

  it('fetches and displays players list', async () => {
    const wrapper = mount(App)

    // Ensure DOM has updated after fetching
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const playersListItems = wrapper.findAllComponents(PlayersListItem)
    expect(playersListItems).toHaveLength(mockPlayers.length)

    if (playersListItems.length > 0) {
      const firstPlayer = playersListItems[0]
      expect(firstPlayer.text()).toContain('Noah')
      expect(firstPlayer.text()).toContain('Alvandi')
      expect(firstPlayer.text()).toContain('Jönköping')
    }
  })

  it('toggles arrow direction and player sort order', async () => {
    const wrapper = mount(App, {
      global: {
        stubs: ['FontAwesomeIcon']
      }
    })

    // Ensure DOM has updated after fetch
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const gridHeader = wrapper.find('.grid-header .icon-container')
    await gridHeader.trigger('click')

    const playersListItems = wrapper.findAllComponents(PlayersListItem)
    console.log(playersListItems[0])
    expect(playersListItems[0].text()).toContain('Alice') // First item should now be Alice after toggle
    expect(playersListItems[1].text()).toContain('Noah') // Second should now be Noah
  })
})
