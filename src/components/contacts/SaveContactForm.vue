<template>
  <form>
    <div class="form-group" :class="[{ 'has-error': formErrors.name }]">
      <label class="control-label" for="contactName">Contact Name</label>
      <input
        type="text"
        class="form-control"
        placeholder="Enter contact name"
        v-model="contact.name"/>
      <span v-if="formErrors.name" class="glyphicon glyphicon-remove form-control-feedback"></span>
    </div>

    <div class="form-group" :class="[{ 'has-error': formErrors.number }]">
      <label for="contactNumber">Number</label>
      <input
        type="number"
        class="form-control"
        placeholder="Enter contact number"
        :class="[{ 'has-danger': formErrors.number }]"
        v-model="contact.number"/>
      <span v-if="formErrors.number" class="glyphicon glyphicon-remove form-control-feedback"></span>
    </div>

    <div class="form-group" :class="[{ 'has-error': formErrors.email }]">
      <label for="contactNumber">Email</label>
      <input
        type="email"
        class="form-control"
        placeholder="Enter email number"
        :class="[{ 'has-danger': formErrors.email }]"
        v-model="contact.email"/>
      <span v-if="formErrors.email" class="glyphicon glyphicon-remove form-control-feedback"></span>
    </div>

    <button
      type="submit"
      v-on:click.prevent="onSubmit"
      class="btn btn-primary">{{ !contact.number ? 'Save Contact' : 'Save Edit' }}</button>
    <button
      type="submit"
      v-on:click.prevent="onCancel"
      v-if="contact.number"
      class="btn btn-primary">Cancel</button>
  </form>
</template>

<script>
export default {
  props: ['contact'],
  data () {
    return {
      formErrors: {}
    }
  },
  created () {
    this.$watch('contact.number', () => {
      this.formErrors = {}
    })
  },
  methods: {
    validateForm () {
      const errors = {}

      if (!this.contact.name) { errors.name = 'Name is required' }
      if (!this.contact.email) { errors.email = 'Email is required' }
      if (!this.contact.number) { errors.number = 'Number is required' }

      this.formErrors = errors

      return Object.keys(errors).length === 0
    },
    onSubmit () {
      if (this.validateForm()) {
        console.log('form added')
        this.$emit('submit', this.contact)
      }
    },
    onCancel () {
      console.log('form cancelled')
      this.formErrors = {}
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="css">
</style>
