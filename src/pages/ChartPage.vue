<template>
  <div class="chart-container">
    <v-dialog
        v-model="dialog"
        width="auto"
        height="800"
    >
      <template v-slot:activator="{ props }">
        <v-btn
            color="primary"
            v-bind="props"
        >
          Создать слушателя
        </v-btn>
      </template>

      <v-card height="100vh" style="left: 140px">
        <v-card-title>
          <span class="text-h5" style="font-size: 27px; margin: 40px">Заполните данные для создания слушателя</span>
        </v-card-title>
        <v-card-text>
          <vs-input place-h="Название класса"  type="text" v-model="className"/>
          <vs-input place-h="Название метода" type="text" v-model="methodName"/>
          <div style="margin-top: 30px;">
            <VueDatePicker  v-model="date" range :partial-range="false"></VueDatePicker>
          </div>
        </v-card-text>
        <v-card-actions style="display: flex; flex-direction: column;">
          <v-btn block @click="getChartData">Создать</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <Line
        id="my-chart-id"
        :options="chartOptions"
        :data="selectedData"
    />
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import VueDatePicker from "@vuepic/vue-datepicker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import indexAPI from "@/services/intial-api/indexAPI";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default {
  name: 'ChartPage',
  components: { Line,VueDatePicker },
  data() {
    return {
      className: '',
      methodName: '',
      dialog: false,
      date: null,
      labels: [],
      data: [],
      chartOptions: {
        responsive: true
      }
    }
  },
  methods: {
    getChartData(){
      indexAPI.metric.getTimeMetricBetweenDates({
        'from':this.date[0].toISOString(),
        'to':this.date[1].toISOString(),
        'className':this.className,
        'methodName':this.methodName
      }).then(r=>{
        this.labels = r.map(item => item.endedDate);
        this.data = r.map(item => item.executionTime);
      })

      this.dialog = false;
    }
  },
  computed: {
    // a computed getter
    selectedData() {
      // `this` points to the component instance
      return {
        labels: this.labels,
            datasets: [ {
              label: 'Зависимость времени исполнения метода от даты сбора метрики ',
          backgroundColor: '#f87979',
          data: this.data },
        ]
      }
    }
  }
}
</script>

<style>
.chart-container{
  margin: 50px 200px;
}
</style>