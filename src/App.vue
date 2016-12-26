<template>
  <div id="app" v-cloak>
    <top-nav></top-nav>

    <transition name="fade" mode="out-in">
      <router-view class="app-content"></router-view>
    </transition>

    <main-footer></main-footer>
  </div>

</template>

<script>
  import TopNav from './components/TopNav';
  import MainFooter from './components/MainFooter';

  export default {
    name: 'app',
    components: {
      TopNav,
      MainFooter,
    },
  };
</script>
<style lang="scss">
  #app {
    .app-content {
      height: auto;
      min-height: calc(100vh - 113px);
      background-color: #f5f5f5;
      width: 100%;
    }
    .fade-enter-active, .fade-leave-active {
      transition: all .2s ease;
    }

    .fade-enter, .fade-leave-active {
      opacity: 0;
    }
  }
</style>