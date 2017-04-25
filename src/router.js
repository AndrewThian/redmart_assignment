import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Contacts from './components/contacts/Contacts.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/contacts',
      component: Contacts
    }
  ]
})
