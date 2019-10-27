<template>
    <v-app>
      <v-layout>
       <v-flex xs2 sm2 md2 lg2>
          <Menu></Menu>
        </v-flex>
        <v-flex xs10 sm10 md10 lg10>
          <div class="headline" style='background: rgba(153, 153, 153, 1);'>
            <div class="text-right">
                <img :src="avatar" class="img">
            </div>
          </div>
          <!-- 表格 -->
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
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-app>
</template>

<script>
import Menu from '../components/Menu'
export default {
  name: 'Admin',
  data () {
    return {
      page: 1,
      avatar: require('../assets/user.jpg'),
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      expand: false,
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
        { text: 'Actions', value: '', sortable: false }
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      }
    }
  },
  components: {
    Menu
  },
  created () {
    this.initialize()
  },
  methods: {
    initialize () {
      this.desserts = [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5
        }
      ]
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
