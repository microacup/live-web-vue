<template>
  <div id="app" v-cloak>
    <top-nav></top-nav>

    <transition name="fade" mode="out-in">
      <section class="app-content">
        <router-view></router-view>
      </section>
    </transition>
  </div>

</template>

<script>
  import TopNav from './components/TopNav';

  export default {
    name: 'app',
    components: {
      TopNav
    }
  };
</script>
<style lang="scss">
  #app {
    .app-content {
      min-height: calc(100vh - 62px);
    }
  }
</style>