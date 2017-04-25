import * as getters from './getters'
import * as actions from './actions'

import {
  CREATE_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT
} from './mutation-types'

// initialized state
const initialState = {
  all: [
    { id: 'cc919e21-ae5b-5e1f-d023-c40ee669520c', name: 'Andrew Thian', email: 'andrew@gmail.com', number: 91234567 },
    { id: 'bcd755a6-9a19-94e1-0a5d-426c0303454f', name: 'John Doe', email: 'john@gmail.com', number: 91234567 },
    { id: '727026b7-7f2f-c5a0-ace9-cc227e686b8e', name: 'Jane Doe', email: 'jane@gmail.com', number: 91234567 },
    { id: '727026b7-7f2f-c5a0-ace9-cc217e415b8e', name: 'Jean Grey', email: 'jean@gmail.com', number: 91234567 },
    { id: '727026b7-7f2f-c5a0-ace9-cd227e612b8e', name: 'Scott Summers', email: 'scott@gmail.com', number: 91234567 }
  ]
}

const mutations = {
  [CREATE_CONTACT] (state, contact) {
    state.all.push(contact)
  },
  [UPDATE_CONTACT] (state, contact) {
    const index = state.all.findIndex((c) => c.id === contact.id)

    if (index !== -1) {
      // We need to replace the array entirely so that vue can recognize
      // the change and re-render entirely.
      state.all.splice(index, 1, contact)
    }
  },
  [DELETE_CONTACT] (state, contactId) {
    state.all = state.all.filter((c) => c.id !== contactId)
  }
}

export default {
  // incase I wanna reset state
  state: { ...initialState },
  actions,
  getters,
  mutations
}
