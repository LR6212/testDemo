<template>
  <div class="hello">
    <v-container>
      <v-layout justify-center align-center>
        <v-flex xs12 sm4 md4></v-flex>
        <v-flex xs12 sm4 md4>
          <h1>金融助手后台管理</h1>
          <v-card-text>
            <v-form>
              <v-text-field label="账户" solo prepend-inner-icon="person" placeholder="账户" type="text"></v-text-field>
              <v-text-field label="密码" solo prepend-inner-icon="lock" placeholder="密码" type="password"></v-text-field>
              <v-btn block class="btn-style" @click="login()">登录</v-btn>
          </v-form>
          </v-card-text>
        </v-flex>
        <v-flex xs12 sm4 md4></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    login () {
      this.$router.push('Admin')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 20px;
  font-family: 'Microsoft YaHei';
  font-weight:  bold;
  text-align: center;
  margin: 150px 0 60px 0;
}
.btn-style {
  border-radius: 4px;
}
</style>
