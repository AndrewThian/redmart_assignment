<template>
  <div>
    <div class="col-sm-12 col-md-12 col-lg-12">
      <input
        type="text"
        class="form-control"
        placeholder="Search"
        v-model="searchParams">
        <hr>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-12">
      <app-contact
        v-for="contact in filteredContacts"
        :contact="contact"
        :key="contact.number"
        v-on:edit="onEditClicked"
        v-on:remove="onRemoveClicked"
        ></app-contact>
        <hr>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-12">
      <save-contact-form
        :contact="contactInForm"
        v-on:submit="onFormSave"
        v-on:cancel="resetContactInForm"
      ></save-contact-form>
    </div>
  </div>
</template>

<script>
import Contact from './Contact.vue'
import SaveContactForm from './SaveContactForm.vue'

export default {
  data () {
    return {
      contactInForm: {
        name: '',
        number: null,
        email: ''
      },
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
  methods: {
    onFormSave (contact) {
      const numberIndex = this.contacts.findIndex(c => c.number === contact.number)
      // checking if contact is unique in contacts array
      if (numberIndex !== -1) {
        this.contacts.splice(numberIndex, 1, contact)
      } else {
        this.contacts.push(contact)
      }
      // clear contact form
      this.resetContactInForm()
    },
    resetContactInForm () {
      this.contactInForm = {
        name: '',
        number: null,
        email: ''
      }
    },
    onEditClicked (contact) {
      this.contactInForm = { ...contact }
    },
    onRemoveClicked (contact) {
      const numberIndex = this.contacts.findIndex(c => c.number === contact.number)
      this.contacts.splice(numberIndex, 1)
      // reset form if current contact is removed
      if (contact.number === this.contactInForm.number) { this.resetContactInForm() }
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
    appContact: Contact,
    SaveContactForm: SaveContactForm
  }
}
</script>

<style>
</style>
