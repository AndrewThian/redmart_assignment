<template>
  <div>
    <app-contact
      v-for="contact in contacts"
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
      ]
    }
  },
  components: {
    appContact: Contact
  }
}
</script>

<style>
</style>
