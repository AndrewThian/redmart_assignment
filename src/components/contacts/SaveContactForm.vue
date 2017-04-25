<template>
  <form>
    <div class="form-group">
      <label for="contactName">Contact Name</label>
      <input
        type="text"
        class="form-control"
        placeholder="Enter contact name"
        v-model="contact.name">
    </div>
    <div class="form-group">
      <label for="contactNumber">Number</label>
      <input type="number" class="form-control" placeholder="Enter contact number"
      v-model="contact.number">
    </div>
    <div class="form-group">
      <label for="contactNumber">Email</label>
      <input type="text" class="form-control" placeholder="Enter email number"
      v-model="contact.email">
    </div>
    <button type="submit" v-on:click.prevent="onSubmit" class="btn btn-primary">{{ (contact.email === '') ? 'Save Contact' : 'Save Edit' }}</button>
    <button type="submit" v-on:click.prevent="onCancel" class="btn btn-primary">Cancel</button>
  </form>
</template>

<script>
export default {
  props: ['contact'],
  methods: {
    onSubmit () {
      console.log('form added')
      this.$emit('submit', this.contact)
    },
    onCancel () {
      console.log('form cancelled')
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="css">
</style>
