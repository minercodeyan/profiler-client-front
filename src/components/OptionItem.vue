<template>
  <div class="listener">
    <div>
      <div>
        <b>Название:</b> {{ option.name }}
      </div>
      <div>
        <b>Kafka сервер:</b> {{ option.bootstrapServer }}
      </div>
      <div>
        <b>Ключ для десериализации:</b> {{ option.keyDeserializer }}
      </div>
      <div>
        <b>Значение для десериализации:</b> {{ option.valueDeserializer }}
      </div>
      <div>
        <b>Время сессии:</b> {{ option.sessionTimeout }}
      </div>
      <div>
        <b>Время опроса:</b> {{ option.heartBeatInterval }}
      </div>
      <div>
        <b>Дата создания:</b> {{formDate(option.createAt)}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "OptionItem",
  props: {
    option: {
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
  width: 960px;
  background-color: #e3f2fd;
  margin: 10px;
  padding: 15px;
  border: #d0d0d0 solid 1px;
  display: flex;
  justify-content: space-between; /* Может быть изменено */
}
</style>