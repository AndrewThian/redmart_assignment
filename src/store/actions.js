import Vue from 'vue'

export const loadData = ({ commit }) => {
  console.log('beginning to commit data into database...')
  Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
      if (data) {
        const contacts = data.contacts
        commit('SET_CONTACTS', contacts)
      }
    })
}
