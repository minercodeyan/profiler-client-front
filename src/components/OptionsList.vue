<template>
  <div class="listener_board">
    <template v-if="options.length">
      <option-item v-for="option in options" :option="option" :key="option.id" ></option-item>
    </template>
    <template v-else-if="!isLoading">
      <b> Не создано ни единой настройки</b>
    </template>
  </div>
</template>

<script>
import OptionItem from "@/components/OptionItem";
export default {
  name: "OptionsList",
  components: {OptionItem},
  props:{
    options: {
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