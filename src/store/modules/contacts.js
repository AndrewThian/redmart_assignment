import contacts from '../../data/contacts'
import uuid from 'uuid'

const state = {
  contacts: []
}

const mutations = {
  'SET_CONTACTS' (state, contacts) {
    state.contacts = contacts
  },
  'CREATE_CONTACT' (state, contact) {
    state.contacts.push(contact)
  },
  'UPDATE_CONTACT' (state, contact) {
    const index = state.contacts.findIndex((c) => c.id === contact.id)

    if (index !== -1) {
      state.contacts.splice(index, 1, contact)
    }
  },
  'DELETE_CONTACT' (state, contactId) {
    state.contacts = state.contacts.filter((c) => c.id !== contactId)
  }
}

const actions = {
  initContacts: ({ commit }) => {
    commit('SET_CONTACTS', contacts)
  },
  saveContact: ({ commit, state }, contact) => {
    const index = state.contacts.findIndex((c) => c.id === contact.id)

    if (index !== -1) {
      commit('UPDATE_CONTACT', contact)
    } else {
      contact.id = uuid.v4()
      commit('CREATE_CONTACT', contact)
    }
  },
  deleteContact: ({ commit, state }, contactId) => {
    commit('DELETE_CONTACT', contactId)
  }
}

const getters = {
  getContacts: state => {
    return state.contacts
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
