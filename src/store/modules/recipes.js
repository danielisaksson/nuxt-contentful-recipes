import { createClient } from '~/plugins/Contentful.js'
const client = createClient()

const state = () => ({
  recipes: []
})

const mutations = {
  setRecipes(state, payload) {
    state.recipes = payload
  },
  setRecipe(state, item) {
    if (getters.getRecipeBySlug(item.slug)) {
      console.log(`setRecipe ${item.slug} - Recipe already exist`)
    } else {
      state.recipes.push(item)
      console.log(`setRecipe ${item.slug}`)
    }
  }
}

const actions = {
  async getRecipes({ commit }) {
    console.log('getRecipes')
    const items = await client
      .getEntries({
        content_type: 'recipe',
        select: 'fields'
      })
      .then(result => {
        return result.items.map(({ sys, fields }) => {
          return { id: sys.id, ...fields }
        })
      })
    commit('setRecipes', items)
    return items
  }
}

const getters = {
  getRecipeBySlug: state => slug => {
    if (slug) {
      const recipe = state.recipes.find(item => {
        return `${item.slug}` === `${slug}`
      })
      return recipe
    }
    return null
  },
  getRecipeByID: state => id => {
    if (id) {
      const recipe = state.recipes.find(item => {
        return `${item.id}` === `${id}`
      })
      return recipe
    }
    return null
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
