<template>
  <div class='main'>
    <h4 style="margin:30px auto;">logo金融助手</h4>
    <ul>
      <li v-for='(item,index) in list' :key='index' :class="activeClass == index ? 'active':''"  @click = "go(index,item)">
        <v-icon :class="activeClass == index ? 'active':''"   v-if='activeClass == index'>person</v-icon>
        <v-icon v-else>person</v-icon>
        {{item.text}}
    </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      i: 0,
      list: [
        {
          text: '账号管理',
          path: 'account'
        },
        {
          text: '发布资讯',
          path: 'publishInfor'
        },
        {
          text: '工资理财',
          path: 'finance'
        }
      ],
      activeClass: 0
    }
  },
  methods: {
    go (index, item) {
      this.activeClass = index
      console.log(item)
      if (item === '账号管理') {
        this.$router.push('Admin')
      } else {
        this.$router.push('/Admin/' + item.path)
      }
    }
  }
}
</script>

<style scoped>
.main {
  background: rgba(64, 62, 62, 1);
  color: white;
  overflow: hidden;
  text-align: center;
  height: 100%;;
}

li{
  list-style-type: none;
  margin:0 10px 25px -15px;;
  margin-bottom: 25px;
}

.active {
  color: rgba(24, 144, 255, 1);
}
</style>
