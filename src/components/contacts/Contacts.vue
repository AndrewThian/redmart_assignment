<template>
  <div>
    <div class="container-fluid">
      <input
        type="text"
        class="form-control"
        placeholder="Search"
        v-model="searchParams">
        <hr>
    </div>
    <div class="container-fluid">
      <app-contact
        v-for="contact in filteredContacts"
        :contact="contact"
        :key="contact.id"
        v-on:edit="onEditClicked"
        v-on:remove="onRemoveClicked"
        ></app-contact>
        <hr>
    </div>
    <div class="container-fluid">
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

import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      contactInForm: {
        id: null,
        name: '',
        number: null,
        email: ''
      },
      searchParams: ''
    }
  },
  methods: {
    ...mapActions([
      'saveContact',
      'deleteContact'
    ]),
    onFormSave (contact) {
      this.saveContact(contact)
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
      this.deleteContact(contact.id)
      if (contact.id === this.contactInForm.id) {
        this.resetContactInForm()
      }
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
  components: {
    appContact: Contact,
    SaveContactForm: SaveContactForm
  }
}
</script>

<style>
</style>
