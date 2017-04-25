<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-md-12 col-sm-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Header from './components/Header.vue'

export default {
  components: {
    appHeader: Header
  },
  methods: {
    ...mapActions({
      fetchData: 'loadData'
    }),
    loadData () {
      this.fetchData()
    }
  },
  created () {
    this.$store.dispatch('initContacts')
    this.loadData()
  }
}
</script>

<style>
</style>
