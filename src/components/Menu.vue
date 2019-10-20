<template>
  <div class='main'>
    <ul v-for='(item,index) in list' :key='index'>
      <li :class="{blue: i === index}" @click="go(index)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      i: 1,
      list:['logo金融助手','账号管理','发布资讯','工资理财']
    }
  },
  methods: {
    go(index) {
      if(index !== 0) {
        this.i = index
      }
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
}
li{
  list-style-type: none;
  margin: 32px 0 0 55px;
}
.blue {
  color: blue;
}
</style>