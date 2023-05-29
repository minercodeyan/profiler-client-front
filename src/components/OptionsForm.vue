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
          Создать настройку
        </v-btn>
      </template>

      <v-card style="left: 140px">
        <v-card-title>
          <span class="text-h5" style="font-size: 27px; margin: 40px">Заполните данные для создания настройки</span>
        </v-card-title>
        <v-card-text>
          <vs-input place-h="Название"  type="text" v-model="option.name"/>
          <vs-input place-h="Kafka сервер" type="text" v-model="option.bootstrapServer"/>
          <vs-input place-h="Ключ для десериализации" type="text" v-model="option.keyDeserializer"/>
          <vs-input place-h="Значение для десериализации" type="text" v-model="option.valueDeserializer"/>
          <vs-input place-h="Время сессии (мс)" type="number" v-model="option.sessionTimeout"/>
          <vs-input place-h="Время опроса" type="number" v-model="option.heartBeatInterval"/>
          <vs-input place-h="ID группы" type="number" v-model="option.groupId"/>
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
  name: "OptionsForm",
  data () {
    return {
      option: {
        name: '',
        heartBeatInterval: '',
        bootstrapServer: '',
        keyDeserializer: '',
        valueDeserializer: '',
        sessionTimeout: '',
        groupId: ''
      },
      error: '',
      dialog: false,
    }
  },
  methods: {
    save(){
      indexAPI.options.create(this.option)
          .then(r=>{
            if(r){
              this.dialog = false;
              this.$emit('createOption',this.option)
              // this.option.name = '';
              // this.option.topicName = '';
              // this.option.type = '';
            }
          })
          .catch(e=>this.error = e.response.data.msg)

      this.$emit('saveAction',{createOption: this.option})
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