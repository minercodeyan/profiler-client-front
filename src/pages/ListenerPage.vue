<template>
<div class="listenerItem">
  <div style="color: red" v-if="error">{{error}}</div>
  <div><b>Название:</b> {{listener.name}}</div>
  <div><b>Наименование топика:</b> {{listener.topicName}}</div>
  <div class="actions">
    <v-btn color="red" @click="deleteListener">
      Удалить
    </v-btn>
    <v-btn v-if="enabled === 1" color="red" @click="deactivate">
      Деактивировать
    </v-btn>
    <v-btn v-else color="green" @click="activate">
      Активировать
    </v-btn>
    <v-btn :disabled="listener.listenerThreads.length"
    >
      Создать потоки

      <v-dialog
          v-model="dialog2"
          activator="parent"
          width="450px"
      >
        <v-card>
          <v-card-text>
            <vs-input place-h="Количество потоков" type="text" v-model="countOfThreads"/>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="createThreads">
              Активировать
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
    <div class="text-center">
      <v-btn
          color="primary"
          @click="getOptions"
      >
        Назначить

        <v-dialog
            v-model="dialog"
            activator="parent"
            width="450px"
        >
          <v-card>
            <v-card-text>
              <v-select
                  label="Опция"
                  return-object
                  v-model="option"
                  :items="options"
                  item-title="name"
                  item-value="id"
              ></v-select>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="bindOption">
                Привязать
              </v-btn>
              <v-btn @click="unbindOption">
                Отвязать
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-btn>
    </div>
  </div>
  <div v-if="listener.listenerSettings" style="border-top: 3px solid black; font-size: 17px">
    <h3 style="margin-bottom: 30px">Настройки для слушателя</h3>
    <div>
      <b>Название:</b> {{ listener.listenerSettings.name }}
    </div>
    <div>
      <b>Kafka сервер:</b> {{ listener.listenerSettings.bootstrapServer }}
    </div>
    <div>
      <b>Ключ для десериализации:</b> {{ listener.listenerSettings.keyDeserializer }}
    </div>
    <div>
      <b>Значение для десериализации:</b> {{ listener.listenerSettings.valueDeserializer }}
    </div>
    <div>
      <b>Время сессии:</b> {{ listener.listenerSettings.sessionTimeout }}
    </div>
    <div>
      <b>Время опроса:</b> {{ listener.listenerSettings.heartBeatInterval }}
    </div>
  </div>
  <div v-if="listener.listenerThreads" style="border-top: 3px solid black; font-size: 17px">
    <h3 style="margin-bottom: 30px">Потоки для слушателя</h3>
    <div class="thread" v-for="listener in listener.listenerThreads" :key="listener.id">
      <div>
        <b>Название:</b> {{ listener.name }}
      </div>
      <div>
        <b>Дата создания:</b> {{ listener.createAt }}
      </div>
    </div>
  </div>
</div>

</template>

<script>
import indexAPI from "@/services/intial-api/indexAPI";
import router from "@/router";
import VsInput from "@/components/UI/VsInput";



export default {
  name: "ListenerPage",
  components: {VsInput},
  data() {
    return {
      countOfThreads: 1,
      dialog: false,
      dialog2: false,
      listenerId: this.$route.params.id,
      error: '',
      enabled: false,
      options: [],
      option: {
        id: '',
        name: ''
      },
      listener: {
        listenerThreads: []
      }
    }
  },
  mounted() {
    this.getListener(this.listenerId)
  },
  methods: {
    async getListener(id){
      await indexAPI.listeners.getById(id).then(r=>{
        this.listener = r
        this.enabled = r.enabled
        this.option = r.listenerSettings
      })
    },
    async deleteListener(){
      await indexAPI.listeners.delete(this.listenerId)
          .then(r=>{
            if(r.status === 200){
              router.push({ path: '/listeners' })
            }
          }
          )
          .catch(e=>this.error = e.response.data.msg)
    },
    async deactivate(){
      await indexAPI.listeners.deactivate(this.listenerId)
          .then(this.enabled = 0)
    },
    async createThreads(){
      for(let i = 0; i<this.countOfThreads; i++ ){
        await indexAPI.listeners.createThread(this.listener.name + '_thread_'+Number(i+1))
            .then(r=>{
                  if(r.status === 200){
                    indexAPI.listeners.bindThread(this.listenerId,r.data.id)
                  }
              }

            )
        this.dialog2 = false
        location.reload()
      }

    },
    async activate(){
      await indexAPI.listeners.activate(this.listenerId)
          .then(this.enabled = 1)
    },
    async getOptions(){
      await indexAPI.options.getAll().then(r=>{
        this.options = r
      })
    },
    async bindOption(){
      await indexAPI.options.bind(this.listenerId,this.option.id)
          .then(this.listener.listenerSettings = this.option)
    },
    async unbindOption(){
      await indexAPI.options.unbind(this.listenerId,this.option.id)
          .then(r=>{
            this.listener.listenerSettings = null
            this.option = null
            console.log(r)
          }
          )
    }
  }
}
</script>

<style scoped>
.thread{
  padding: 15px 0px 5px 10px;
  background: #bc9aff;
}
.actions{
  width: 700px;
  display: flex;
  justify-content: space-between;
}
.listenerItem{
  margin: 100px;
  font-size: 25px;
  padding: 20px;
  background: #e6d0ff;
}
.listenerItem div{
  margin-bottom: 20px;
}
</style>