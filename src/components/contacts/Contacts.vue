<template>
  <div>
    <div class="col-md-6">
      <input
        type="text"
        class="form-control"
        placeholder="Search"
        v-model="searchParams">
    </div>
    <hr>
    <app-contact
      v-for="contact in filteredContacts"
      :contact="contact"
      :key="contact.email"
      ></app-contact>
  </div>
</template>

<script>
import Contact from './Contact.vue'

export default {
  data () {
    return {
      contacts: [
        { name: 'Andrew Thian', email: 'andrew@gmail.com', number: 91234567 },
        { name: 'John Doe', email: 'john@gmail.com', number: 91234567 },
        { name: 'Jane Doe', email: 'jane@gmail.com', number: 91234567 },
        { name: 'Jean Grey', email: 'jean@gmail.com', number: 91234567 },
        { name: 'Scott Summers', email: 'scott@gmail.com', number: 91234567 }
      ],
      searchParams: ''
    }
  },
  computed: {
    filteredContacts () {
      return this.contacts.filter(contact => {
        return contact.name.toLowerCase().includes(this.searchParams.toLowerCase())
      })
    }
  },
  components: {
    appContact: Contact
  }
}
</script>

<style>
</style>
