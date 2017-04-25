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
            <th @click="orderName">Name</th>
            <th>Email</th>
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
      <p>You can search for contacts, vuex for managing stored data, firebase for saving data and simple usage of vue-router. Finally, deployed on AWS S3 servers as single page app.</p>
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
      searchParams: ''
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
    orderName () {
      return this.contacts.sort((a, b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      })
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
