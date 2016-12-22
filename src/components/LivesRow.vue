<template>
  <div class="lives-row container">
    <div v-if="title" class="row-top">
      <div class="pull-left">
        <h2>{{title}}</h2>
      </div>
      <div v-show="more" class="pull-right">
        <router-link to="/">更多</router-link>
      </div>
    </div>
    <el-row class="row-body">
      <el-col class="live-col" :span="6" v-for="(o, index) in count">
        <live-card></live-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import LiveCard from './LiveCard';

  export default {
    name: 'LivesRow',
    props: {
      title: String,
      more: {
        type: Boolean,
        default: true,
      },
      count: {
        type: Number,
        default: 4,
      },
    },
    components: {
      LiveCard,
    },
  };
</script>
<style lang="scss">
  .lives-row {
    margin: 0px auto;
    .row-top {
      height: 56px;
      margin-bottom: 2px;
      border-bottom: 1px solid #e2e2e2;
      overflow: hidden;
      .pull-right {
        line-height: 50px;
        padding-top: 10px;
      }
    }
    .row-body {
      margin-top: 20px;
      margin-left: -10px;
      margin-right: -10px;
    }
    .live-col {
      padding: 0 10px;
    }
  }

</style>