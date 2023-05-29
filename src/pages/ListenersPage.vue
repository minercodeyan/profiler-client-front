<template>
  <div class="col s9 content">
    <div class="row">
      <listeners-form @listener="onListener" ></listeners-form>
      <listeners-list :is-loading="loading" :listeners="listeners" ></listeners-list>
      <div class="loader">
        <v-progress-circular v-if="loading"
                             indeterminate
                             color="purple"
        ></v-progress-circular>
      </div>
    </div>
  </div>
</template>

<script>
import ListenersList from "@/components/ListenersList";
import ListenersForm from "@/components/ListenersForm";
import indexAPI from "@/services/intial-api/indexAPI";

export default {
  name: "ListenersPage",
  components: {ListenersList,ListenersForm},
  data() {
    return {
      listeners: [],
      loading: true
    }
  },
  methods: {
    async getListeners() {
      await indexAPI.listeners.getAll()
          .then(r=>{
            this.listeners=r
            this.loading = false
          });
    },
    onListener(data){
      this.listeners.push(data)
    }
  },
  mounted() {
     this.getListeners();
  },
}
</script>

<style scoped>
.loader{
  margin-top: 90px;
  display: flex;
  justify-content: center;
}
</style>