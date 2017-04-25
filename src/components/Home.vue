<template>
  <div>
    <div class="container-fluid">
      <input
        type="text"
        class="form-control"
        placeholder="Search"
        v-model="searchParams">
    </div>
    <hr>
    <div class="container-fluid">
      <h3>Your contacts: </h3>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th @click="orderName"><b>Name</b> <i class="fa fa-fw fa-sort"></i></th>
            <th @click="orderEmail"><b>Email</b> <i class="fa fa-fw fa-sort"></i></th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in filteredContacts" :key="contact.id">
            <td>{{ contact.name }}</td>
            <td>{{ contact.email }}</td>
            <td>{{ contact.number }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr>
    <div class="container-fluid">
      <h3>Functionality: </h3>
      <p>Here are some of the core functionality in the app!</p>
      <ul>
        <li>Search for names</li>
        <li>Filter by alphabetical order (name, email)</li>
        <li>save data / load data</li>
      </ul>
      <p>Basic CRUD functionality:</p>
      <ul>
        <li>Add</li>
        <li>Edit</li>
        <li>Delete</li>
      </ul>
    </div>
    <hr>
    <div class="container-fluid">
      <h3>Tests: </h3>
      <p>Simple test with Karma and Nightwatch for e2e testing</p>
      <p>Test suite covers:</p>
      <ul>
        <li>CRUD functionality with vuex</li>
        <li>Testing save feature with firebase</li>
        <li>Search function testing</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      searchParams: '',
      sortOrder: false
    }
  },
  computed: {
    ...mapGetters({
      contacts: 'getContacts'
    }),
    filteredContacts () {
      return this.contacts.filter(contact => {
        return contact.name.toLowerCase().includes(this.searchParams.toLowerCase())
      })
    }
  },
  methods: {
    // TODO: REFACTOR THIS CRAP
    orderName () {
      this.sortOrder = !this.sortOrder
      if (this.sortOrder) {
        return this.contacts.sort((a, b) => {
          if (a.name < b.name) return -1
          if (a.name > b.name) return 1
          return 0
        })
      } else {
        return this.contacts.sort((a, b) => {
          if (a.name < b.name) return 1
          if (a.name > b.name) return -1
          return 0
        })
      }
    },
    orderEmail () {
      this.sortOrder = !this.sortOrder
      if (this.sortOrder) {
        return this.contacts.sort((a, b) => {
          if (a.email < b.email) return -1
          if (a.email > b.email) return 1
          return 0
        })
      } else {
        return this.contacts.sort((a, b) => {
          if (a.email < b.email) return 1
          if (a.email > b.email) return -1
          return 0
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  body {
    padding: 30px;
  }
</style>
