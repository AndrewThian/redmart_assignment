<template>
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand">Contact Manager</router-link>
    </div>

    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <router-link to="/contacts" activeClass="active" tag="li"><a>Manage Contacts</a></router-link>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li
          class="dropdown"
          :class="{open: dropDownOpen}"
          @click="dropDownOpen = !dropDownOpen">
          <a
            href="#"
            class="dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false">Save and Load <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#" @click="saveData">Save Data</a></li>
            <li><a href="#" @click="loadData">Load Data</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data () {
    return {
      dropDownOpen: false
    }
  }
}
</script>

<style>
</style>
