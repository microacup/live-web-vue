<template>
  <el-form :model="channel" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="channel.name" placeholder="频道标题"></el-input>
      </el-form-item>
      <el-form-item label="主播">
        <el-autocomplete
          v-model="channel.author"
          :fetch-suggestions="searchUsers"
          placeholder="输入用户ID或昵称搜索"
          @select="handleSelectAuthor"
          v-if="type==='add'">
        </el-autocomplete>
        <el-input v-else  :disabled="true" :value="channel.author.nick + '(' + channel.author.userid + ')'" title="不允许修改主播"></el-input>
      </el-form-item>
      <el-form-item label="课程">
        <el-col :span="11">
          <el-select v-model="channel.major" placeholder="请选择专业">
            <el-option label="英语" value="eng"></el-option>
            <el-option label="数学" value="math"></el-option>
          </el-select>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-select v-model="channel.clazz" placeholder="请选择课程">
            <el-option label="英语1" value="shanghai"></el-option>
            <el-option label="英语2" value="beijing"></el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="收费">
        <el-col :span="6">
         <el-switch on-text="" off-text="" v-model="channel.isfee"></el-switch>
        </el-col>
        <el-col :span="18">
          <el-input placeholder="收费金额（元）" :disabled="!channel.isfee" v-model="channel.fees"><template slot="prepend">￥</template></el-input>
        </el-col>
        <!--<el-switch on-text="" off-text="" v-model="channel.ispreview"></el-switch>允许试看-->
      </el-form-item>
      <el-form-item label="频道ID" v-if="type !=='add'">
        <strong>{{channel.id}}</strong>
      </el-form-item>
      <el-form-item label="频道类型">
        <strong>{{channel.type}}</strong>
      </el-form-item>
      <el-form-item v-if="type === 'edit'" label="创建时间">
        <strong>{{channel.createdTime}}</strong>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="submit">{{ type === 'add' ? '立即创建' : '保存'}}</el-button>
      </el-form-item>
    </el-form>
</template>
<script>
export default {
  name: 'ChannelForm',
  props: [
    'channel',
    'type'
  ],
  data() {
    return {
      loading: false,
      users: [],
    };
  },
  mounted() {
  },
  methods: {
    submit() {
      this.$emit('submit');
    },
    searchUsers(query) {
      console.log(query);
    },
    handleSelectAuthor(item) {
      console.log(item);
    }
  }
};

</script>