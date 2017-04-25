import uuid from 'uuid'

import {
  DELETE_CONTACT,
  CREATE_CONTACT,
  UPDATE_CONTACT
} from './mutation-types'

export const saveContact = ({ commit, state }, contact) => {
  const index = state.all.findIndex((c) => c.id === contact.id)

  // update contact if exists or create if it's not
  if (index !== -1) {
    commit(UPDATE_CONTACT, contact)
  } else {
    contact.id = uuid.v4()
    commit(CREATE_CONTACT, contact)
  }
}

export const deleteContact = ({ commit, state }, contactId) => {
  commit(DELETE_CONTACT, contactId)
}
