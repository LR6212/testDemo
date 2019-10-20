<template>
  <div>
    <div style="display:flex;">
      <div style="width:15%;">
        <Menu></Menu>
      </div>
      <div style="width:85%;">
        <div class="headline">
          <div class="text-right">
            <img :src='imgUrl' class="img" @click='showUserData'>
            <div class="position-name" v-if="showUser">
              <p>个人设置</p>
              <p>退出账号</p>
            </div>
          </div>
        </div>
        <v-container fluid @click="showUser = false">
          <v-layout style="display:flex;justify-content:space-between;">
            <h1>账号管理</h1>
            <div>
              <!-- <v-select :items="selectList" v-model="selectValue" solo></v-select> -->
              <v-text-field label="搜索" prepend-inner-icon="search" v-model="inputValue" solo value="inputValue"></v-text-field>       
            </div>
          </v-layout>
          <v-layout style="border:1px solid red;height:500px;">
            <v-data-table
              :headers="headers"
              :items="desserts"
              class="elevation-1"
            >
              <template v-slot:items="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.calories }}</td>
                <td class="text-xs-right">{{ props.item.fat }}</td>
                <td class="text-xs-right">{{ props.item.carbs }}</td>
                <td class="text-xs-right">{{ props.item.protein }}</td>
                <td class="text-xs-right">{{ props.item.iron }}</td>
              </template>
            </v-data-table>
          </v-layout>
    </v-container>
    </div>

      </div>
    </div>
  </div>
</template>

<script>
import Menu from '../components/Menu'
export default {
  name: 'Admin',
  data () {
    return {
      imgUrl: require('../assets/user.jpg'),
      showUser: false,
      selectList: ['昵称', 'ID', '手机号'],
      selectValue: 'ID',
      inputValue: '',
      headers: [
        {
          text: 'ID',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: '头像', value: 'calories' },
        { text: '昵称', value: 'fat' },
        { text: '用户权限', value: 'carbs' },
        { text: '邮箱', value: 'protein' },
        { text: '手机号', value: 'iron' }
      ],
      desserts: [
        {
          name: '1234567',
          calories: 159,
          fat: '图书',
          carbs: '普通用户',
          protein: '1234***78@163.com',
          iron: '1234****89'
        },
        {
          name: '1234567',
          calories: 237,
          fat: '图书',
          carbs: '普通用户',
          protein: '1234***78@163.com',
          iron: '1234****89'
        },
        {
          name: '1234567',
          calories: 262,
          fat: '图书',
          carbs: '普通用户',
          protein: '1234***78@163.com',
          iron: '1234****89'
        }
      ]
    }
  },
  components: {
    Menu
  },
  methods: {
    showUserData () {
      this.showUser = true
    }
  }
}
</script>

<style scoped>
.headline {
    height: 60px;
    background: rgba(153, 153, 153, 1)
}
.img {
    width: 44px;
    height: 44px;
    /* border: 1px solid red; */
    border-radius: 50%;
    position: absolute;
    top: 8px;
    right: 16px;
}
.text-right {
  position: relative;
}
.position-name {
    width: 118px;
    position: absolute;
    right: 20px;
    top: 58px;
    z-index: 2;
    text-align: left;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px !important;
}
</style>