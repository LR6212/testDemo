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
          <v-container>
            <v-layout>
                <v-stepper v-model="e1" style='width:100%;'>
                    <v-stepper-header>
                    <v-stepper-step :complete="e1 > 1" step="1">编辑资讯</v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="e1 > 2" step="2">编辑概要</v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="e1 > 3" step="3">编辑图谱</v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step step="4">app效果预览</v-stepper-step>
                    </v-stepper-header>
                    <v-stepper-items>
                        <div style='display:flex;justify-content:space-between;'>
                            <h4 style='margin:10px;font-size:14px;' v-if='e1 === 1'>编辑资讯</h4>
                            <h4 style='margin:10px;font-size:14px;' v-else-if='e1 === 2'>编辑概要</h4>
                            <h4 style='margin:10px;font-size:14px;' v-else-if='e1 === 3'>编辑图谱</h4>
                            <h4 style='margin:10px;font-size:14px;' v-else>app效果预览</h4>
                            <v-btn
                                color="primary"
                                @click="next()"
                                style='height:25px;line-height:25px;margin:10px;'
                            >
                            下一步
                            </v-btn>
                        </div>
                        <v-divider></v-divider>
                        <v-stepper-content step="1">
                            <div style='display:flex;'>
                               <div style='width:80%;'>
                                    <div id="toolbar-container" style="width:80%;margin:auto;">
                                        <span class="ql-formats">
                                            <select class="ql-font"></select>
                                            <select class="ql-size"></select>
                                        </span>
                                        <span class="ql-formats">
                                            <button class="ql-bold"></button>
                                            <button class="ql-italic"></button>
                                            <button class="ql-underline"></button>
                                            <button class="ql-strike"></button>
                                        </span>
                                        <span class="ql-formats">
                                            <select class="ql-color"></select>
                                            <select class="ql-background"></select>
                                        </span>
                                        <span class="ql-formats">
                                            <button class="ql-list" value="ordered"></button>
                                            <button class="ql-list" value="bullet"></button>
                                        </span>
                                        <span class="ql-formats">
                                            <button class="ql-direction" value="rtl"></button>
                                            <select class="ql-align"></select>
                                        </span>
                                        <span class="ql-formats">
                                            <button class="ql-link"></button>
                                            <button class="ql-image"></button>
                                        </span>
                                    </div>
                                    <v-divider></v-divider>
                                    <v-card style="width:80%;margin:20px auto;">
                                       <div id="editor" class="quill"></div>
                                    </v-card>
                                </div>
                                <div style='width:20%;border-left: 1px solid #ccc;'>
                                    <h5 style='height:42px;border-bottom: 1px solid #ccc;line-height:42px;padding-left:20px;'>文章分类</h5>
                                     <div style='margin:20px;'>
                                        <span style='font-size: 14px;color:rgba(80, 80, 80, 1);'>文章所属领域:</span>
                                        <v-select
                                            :items="items"
                                            outlined
                                            dense
                                            style='margin:10px 0 0 0;'
                                        ></v-select>
                                        <span style='font-size: 14px;color:rgba(80, 80, 80, 1)'>文章标签：</span>
                                        <v-text-field
                                            label="请输入文章关键字"
                                            single-line
                                            dense
                                            outlined
                                            style='margin:10px 0;'
                                        ></v-text-field>
                                     </div>
                                </div>
                            </div>
                        </v-stepper-content>
                        <v-stepper-content step="2">
                            <div>
                                <div id="toolbar-containers" style='width:80%;margin:auto;'>
                                    <span class="ql-formats">
                                        <select class="ql-font"></select>
                                        <select class="ql-size"></select>
                                    </span>
                                    <span class="ql-formats">
                                        <button class="ql-bold"></button>
                                        <button class="ql-italic"></button>
                                        <button class="ql-underline"></button>
                                        <button class="ql-strike"></button>
                                    </span>
                                    <span class="ql-formats">
                                        <select class="ql-color"></select>
                                        <select class="ql-background"></select>
                                    </span>
                                    <span class="ql-formats">
                                        <button class="ql-list" value="ordered"></button>
                                        <button class="ql-list" value="bullet"></button>
                                    </span>
                                    <span class="ql-formats">
                                        <button class="ql-direction" value="rtl"></button>
                                        <select class="ql-align"></select>
                                    </span>
                                    <span class="ql-formats">
                                        <button class="ql-link"></button>
                                        <button class="ql-image"></button>
                                    </span>
                                </div>
                                <v-divider></v-divider>
                                <v-card style="width:80%;margin:20px auto;">
                                    <div id="editors" class="quill"></div>
                                </v-card>
                            </div>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-app>
</template>

<script>
import Menu from '../components/Menu'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
export default {
  name: 'Infor',
  data () {
    return {
      e1: 1,
      quill: null,
      avatar: require('../assets/user.jpg'),
      outputHTML: '',
      items: ['商业', '金融', '政治']
      }
    },
  components: {
    Menu
  },
  mounted () {
    this.quill = new Quill('#editor', {
      modules: {
        toolbar: '#toolbar-container'
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'
    })
    this.quill = new Quill('#editors', {
      modules: {
        toolbar: '#toolbar-containers'
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'
    })
    this.outputHTML = this.quill.root.innerHTML
  },
  methods: {
    next () {
      this.e1 += 1
      console.log(this.e1)
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
.quill {
  min-height: 300px;
} 
.ql-toolbar.ql-snow {
    border: none;
}
.v-stepper__content {
    padding: 0;
}
</style>
