import Vue from 'vue'
import Vuex from 'vuex'

import contacts from './modules/contacts'

import * as actions from './actions.js'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    contacts
  }
})
