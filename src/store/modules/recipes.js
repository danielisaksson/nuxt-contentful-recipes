import { createClient } from '~/plugins/Contentful.js'
const client = createClient()

const state = () => ({
  recipes: []
})

const mutations = {
  setRecipes(state, payload) {
    state.recipes = payload
  },
  setRecipe(state, payload) {
    // console.log(`setRecipe`, payload)
    state.recipes.push(payload)
  }
}

const actions = {
  async getRecipes({ state, commit }) {
    console.log('getRecipes')

    if (state.recipes.length > 1) {
      console.log(`${state.recipes.length} already fetched`)
      return state.recipes
    }

    const items = await client
      .getEntries({
        content_type: process.env.CONTENTFUL_RECIPE_TYPE,
        select: 'fields'
      })
      .then(result => {
        return result.items.map(({ sys, fields }) => {
          return { id: sys.id, ...fields }
        })
      })
    commit('setRecipes', items)
    return items
  },
  async getRecipe(context, slug) {
    console.log('Vuex: getRecipe', slug)
    const stored_recipe = context.getters.getRecipeBySlug(slug)
    if (stored_recipe) return stored_recipe

    const item = await client
      .getEntries({
        content_type: process.env.CONTENTFUL_RECIPE_TYPE,
        'fields.slug': slug
      })
      .then(result => {
        return result.items.map(({ sys, fields }) => {
          return { id: sys.id, ...fields }
        })
      })
    context.commit('setRecipe', item[0])
    return item[0]
  }
}

const getters = {
  getRecipeBySlug: state => slug => {
    console.log('getRecipeBySlug', slug)
    if (slug) {
      const recipe = state.recipes.find(item => {
        return `${item.slug}` === `${slug}`
      })
      if (recipe) {
        console.log('Found stored recipe', recipe.slug)
        return recipe
      } else {
        console.log('No stored recipe found')
        return null
      }
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
