<template>
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand">Contact Manager</router-link>
    </div>

    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <router-link to="/contacts" activeClass="active" tag="li"><a>Contacts</a></router-link>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
}
</script>

<style>
</style>
