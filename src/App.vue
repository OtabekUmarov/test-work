<template>
  <div id="app" class="wrapper">
    <div class="sidebar">
      <div class="sidebar-logo">
        Logo
      </div>
      <ul>
        <li>
          <router-link to="/test" class="sidebar-link"> Test </router-link>
        </li>
        <li>
          <router-link to="/exam" class="sidebar-link"> Test bajarish </router-link>
        </li>
        <li>
          <router-link to="/students" class="sidebar-link"> Talabalar </router-link>
        </li>
        <li>
          <router-link to="/auth" class="sidebar-link"> Login </router-link>
        </li>
        <li>
          <router-link to="/validations" class="sidebar-link"> Forma (validatsiya) </router-link>
        </li>
      </ul>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>
