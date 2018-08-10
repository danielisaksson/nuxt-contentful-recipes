import Vuex from 'vuex'
import { createClient } from '~/plugins/Contentful.js'

const client = createClient()

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0
    },
    mutations: {
      increment(state) {
        state.counter++
      }
    },
    actions: {
      async nuxtServerInit({ state }) {
        await client
          .getEntries({
            content_type: 'recipe',
            select: 'fields'
          })
          .then(result => {
            state['recipes'] = result.items.map(({ sys, fields }) => {
              return { id: sys.id, ...fields }
            })
            // console.log('state.recipes is ', state.recipes)
          })
      }
    }
  })
}

export default createStore
