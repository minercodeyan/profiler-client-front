<template>
  <div class="col s9 content">
    <div class="row">
      <options-form @createOption="onOption" ></options-form>
      <options-list :is-loading="loading" :options="options" ></options-list>
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
import OptionsForm from "@/components/OptionsForm";
import OptionsList from "@/components/OptionsList";
import indexAPI from "@/services/intial-api/indexAPI";

export default {
  name: "OptionsPage",
  components: {OptionsList,OptionsForm},
  data() {
    return {
      options: [],
      loading: true
    }
  },
  methods: {
    async getOptions() {
      await indexAPI.options.getAll()
          .then(r=>{
            this.options=r
            this.loading = false
          });
    },
    onOption(data){
      this.options.push(data)
    }
  },
  mounted() {
    this.getOptions();
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