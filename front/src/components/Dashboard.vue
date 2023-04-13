<template>
  <v-container>
    <v-text-field
      label="Buscar por nome"
      v-model="filter.search"
    ></v-text-field>
  </v-container>
  <v-container>
    <v-row>
      <v-col
        cols="md-3"
        v-for="beer in beers"
        :key="beer.id"
        class="d-flex padding_lateral"
      >
        <div class="main">
          <div class="fullwidth">
            <BeerVue :beerId="beer.id" :beer="beer"> </BeerVue>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-container class="max-width">
      <v-pagination
        @change="filter.search = ''"
        v-model="filter.page"
        :length="Math.ceil(324 / 8)"
      ></v-pagination>
    </v-container>
  </v-container>
</template>
  
  <script lang="ts">
import { defineComponent, ref } from "vue";
import { useUserStore } from "./../stores/user";
import BeerVue from "./Beer.vue";
import Webservices from "./../services/web";
const ws = new Webservices("beer");

export default defineComponent({
  data() {
    return {
      beers:  new Array<{id:number, name:string}>(),
      user: useUserStore(),
      filter: {
        search: "",
        page: 1,
        finding: false,
      },
    };
  },
  async mounted() {},
  watch: {
    "filter.page": {
      handler() {
        this.filter.search = "";
        this.filterData();
      },
    },
    "filter.search": {
      handler() {
        this.filterData();
      },
    },
  },
  async created() {
    this.beers = await ws.getBeers(this.filter.page, this.filter.search);
  },
  components: { BeerVue },
  methods: {
    async filterData() {
      this.beers = await ws.getBeers(this.filter.page, this.filter.search);
    },
    getPage() {
      return this.filter.page;
    },
  },
});
</script>
  <style scoped>
.main {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  background-color: #66cdaa;
  border-radius: 5%;
}
.padding_lateral {
  padding: 1%;
}
.fullwidth {
  max-width: 100%;
  width: 100%;
}
</style>
  