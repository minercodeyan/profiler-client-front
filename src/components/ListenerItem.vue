<template>
    <router-link class="listener"  :to="{ path: '/listeners/'+listener.id}">
    <div>
      <v-icon :style="listener.enabled ? 'color: green' : 'color: red'">mdi-access-point</v-icon>

    </div>
    <div>
      <div>
        <b>Наименование:</b> {{ listener.name }}
      </div>
      <div>
        <b>Название топика:</b> {{ listener.topicName }}
      </div>
      <div>{{formDate(new Date(listener.createAt))}}</div>
    </div>
    </router-link>
</template>

<script>

export default {
  name: "ListenerItem",
  props: {
    listener: {
      type: Object,
      required: true
    }
  },
  methods: {
    formDate(date){

      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      };

      return date.toLocaleString('ru',options)
    }
  },
}
</script>

<style scoped>
.listener {
  width: 460px;
  background-color: #e3f2fd;
  margin: 10px;
  padding: 15px;
  border: #d0d0d0 solid 1px;
  display: flex;
  justify-content: space-between; /* Может быть изменено */
  color: black;
  text-decoration: none;
}

</style>