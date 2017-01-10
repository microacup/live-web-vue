<template>
  <footer class="main-footer">
  <div class="container">
    <div class="pull-right">
      <b>Version</b> 1.0.0
    </div>
    Copyright &copy; 2016 <router-link to="http://meiqiu.me">meiqiu.me</router-link>.
    All rights reserved.
  </div>
  <!-- /.container -->
</footer>
</template>
<script>
  export default {
    name: 'MainFooter',
  };
</script>
<style lang="scss">
  .main-footer {
    background: #fff;
    padding: 15px;
    color: #444;
    border-top: 1px solid #d2d6de;
  }
</style>