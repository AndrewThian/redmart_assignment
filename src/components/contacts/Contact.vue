<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ contact.name }}
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <p>Email: {{ contact.email }}</p>
          <p>Number: {{ contact.number }}</p>
        </div>
        <div class="pull-right">
          <button class="btn btn-sm btn-warning" @click="onEdit(contact)">Edit</button>
          <button class="btn btn-sm btn-danger" @click="onRemove(contact)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['contact'],
    methods: {
      onEdit (contact) {
        console.log('edit form')
        this.$emit('edit', contact)
      },
      onRemove (contact) {
        console.log('remove contact')
        this.$emit('remove', contact)
      }
    }
  }
</script>

<style scoped>
p {
  width: 308px;
}
</style>
