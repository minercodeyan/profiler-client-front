<template>
  <div class="center">
    <v-dialog
        v-model="dialog"
        width="auto"
        height="700"

    >
      <template v-slot:activator="{ props }">
        <v-btn
            color="primary"
            v-bind="props"
        >
          Создать слушателя
        </v-btn>
      </template>

      <v-card style="left: 140px">
        <v-card-title>
          <span class="text-h5" style="font-size: 27px; margin: 40px">Заполните данные для создания слушателя</span>
        </v-card-title>
        <v-card-text>
          <vs-input place-h="Наименование"  type="text" v-model="listener.name"/>
          <vs-input place-h="Название топика" type="text" v-model="listener.topicName"/>
          <vs-input place-h="Тип" type="text" v-model="listener.type"/>
        </v-card-text>
        <v-card-actions style="display: flex; flex-direction: column;">
          <v-btn block @click="save">Создать</v-btn>
          <div style="color: red" v-if="error">{{error}}</div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

import indexAPI from "@/services/intial-api/indexAPI";

export default {
  name: "ListenersForm",
  data () {
    return {
      listener: {
        name: '',
        topicName: '',
        type: ''
      },
      error: '',
      dialog: false,
    }
  },
  methods: {
    save(){
      indexAPI.listeners.create(this.listener)
          .then(r=>{
            if(r){
              this.dialog = false;
              this.$emit('listener',r.data)
              this.listener.name = '';
              this.listener.topicName = '';
              this.listener.type = '';
            }
          })
          .catch(e=>this.error = e.response.data.msg)

      this.$emit('saveAction',{listener: this.listener})
    }
  }
}
</script>

<style scoped>
.center{
  display: flex;
  justify-content: center;
  margin: 30px;
}
</style>