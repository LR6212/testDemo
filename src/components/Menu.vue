<template>
  <div class='main'>
    <h4 style="margin:30px auto;">logo金融助手</h4>
    <ul v-for='(item,index) in list' :key='index'>
      <li :class="{blue: i === index}" @click="go(index)">       
        <v-icon class="margin-20" v-if='i === index'>home</v-icon>
        <v-icon class="margin-20" v-else>event</v-icon>
        {{item}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      i: 0,
      list:['账号管理','发布资讯','工资理财']
    }
  },
  methods: {
    go(index) {
      this.i = index
    }
  }
}
</script>

<style scoped>
.main {
  background: rgba(64, 62, 62, 1);
  color: white;
  height: 100%;
  overflow: hidden;
  text-align: center;
}
li{
  list-style-type: none;
  margin-bottom: 25px;
  text-align: center;
}
.blue {
  color: blue;
}
.margin-20 {
  margin-right: 15px;
}
</style>