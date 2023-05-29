<template>
  <div class="listener_board">
    <template v-if="listeners.length">
      <listener-item v-for="listener in listeners" :listener="listener" :key="listener.id" ></listener-item>
    </template>
    <template v-else-if="!isLoading">
      <b> Не создано ни единого слушателя</b>
    </template>
  </div>
</template>

<script>
import ListenerItem from "@/components/ListenerItem";
export default {
  name: "ListenersList",
  components: {ListenerItem},
  props:{
    listeners: {
      type: Array,
    },
    isLoading: {
      type: Boolean,
      default: true,
    }
  },
}
</script>

<style scoped>
.listener_board{
  display: flex;
  flex-wrap: wrap;
  margin: 40px 10px;
  justify-content: center;
}
</style>