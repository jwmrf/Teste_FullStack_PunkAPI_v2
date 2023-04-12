<template>
    <v-container class="fill-height">
      <v-responsive v-for="beer in beers" :key="beer.id" class="d-flex padding_lateral col-xs-12">
            <div class="main row" >
              <div style="max-width:100%; width: 100%;">
                <BeerVue  :tag="beer.name" :beerId="beer.id" :beer="beer">
                </BeerVue>
              </div>
            </div>
      </v-responsive>
        <v-container class="max-width">
            <v-pagination
              v-model="page"
              :length="Math.ceil(324/10)"
            ></v-pagination>
          </v-container>
    </v-container>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useUserStore } from './../stores/user';
  import BeerVue from './Beer.vue';
  import Webservices from './../services/web'
  const ws = new Webservices('beer')
  
  export default defineComponent({
    data () {
      return {
        beerData: [{id: 1, name: "Heineken"}],
        beers: [{id: 1, name: "Heineken"}],
        changedTag: undefined,
        user: useUserStore(),
        page: 1
      }
    },
    async mounted() {

    },
    watch: {
      page: function(value) {
        this.filterData()
      }

    },
    async created() {
      this.beers = await ws.getBeers(this.page)

    },
    components: { BeerVue },
    methods: {
      async filterData() {
        this.beers = await ws.getBeers(this.page)
      }
    },
  });
  </script>
  <style scoped>
  .main {
    display: flex;
    width: 100%;
    height: 100%;
    padding: .5rem;
    background-color: #66CDAA;
    border-radius: 5%;
  }

  .padding_lateral{
    padding: 1%;
  }
  </style>
  