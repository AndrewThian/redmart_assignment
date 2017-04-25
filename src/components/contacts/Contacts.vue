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
import uuid from 'uuid'
import Contact from './Contact.vue'
import SaveContactForm from './SaveContactForm.vue'

export default {
  data () {
    return {
      contactInForm: {
        id: null,
        name: '',
        number: null,
        email: ''
      },
      contacts: [
        { id: 'cc919e21-ae5b-5e1f-d023-c40ee669520c', name: 'Andrew Thian', email: 'andrew@gmail.com', number: 91234567 },
        { id: 'bcd755a6-9a19-94e1-0a5d-426c0303454f', name: 'John Doe', email: 'john@gmail.com', number: 91234567 },
        { id: '727026b7-7f2f-c5a0-ace9-cc227e686b8e', name: 'Jane Doe', email: 'jane@gmail.com', number: 91234567 },
        { id: '727026b7-7f2f-c5a0-ace9-cc217e415b8e', name: 'Jean Grey', email: 'jean@gmail.com', number: 91234567 },
        { id: '727026b7-7f2f-c5a0-ace9-cd227e612b8e', name: 'Scott Summers', email: 'scott@gmail.com', number: 91234567 }
      ],
      searchParams: ''
    }
  },
  methods: {
    onFormSave (contact) {
      const index = this.contacts.findIndex(c => c.id === contact.id)
      // checking if contact is unique in contacts array
      if (index !== -1) {
        this.contacts.splice(index, 1, contact)
      } else {
        // set id before saving
        contact.id = uuid.v4()
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
      const index = this.contacts.findIndex(c => c.id === contact.id)
      this.contacts.splice(index, 1)
      // reset form if current contact is removed
      if (contact.id === this.contactInForm.id) { this.resetContactInForm() }
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
