<template>
  <div class="container">
    <v-dialog v-model="dialog" width="auto">
      <v-card>
        <h3>&nbsp;{{ beer.name }}</h3>
        <div>
          <v-chip class="ma-2" label> Ibu: {{ beer.ibu }} </v-chip>
          <v-chip class="ma-2" color="pink" label text-color="white">
            Graduação: {{ beer.abv }}
          </v-chip>
          <v-chip class="ma-2" color="primary" label>
            Lançamento: {{ beer.first_brewed }}
          </v-chip>
        </div>
        <v-card-text>
          {{ beer.description }}
        </v-card-text>
        <v-card-actions width="auto">
          <v-chip
            @click="dialog = false"
            class="ma-2"
            closable
            text-color="white"
            :model-value="true"
          >
            Fechar
          </v-chip>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div class="header">
      <h3>
        <slot>{{ getBeerName() }}</slot>
      </h3>
    </div>
    <v-img contain height="120" :src="beer.image_url" />
    <v-row justify="end">
      <v-col cols="auto">
        <v-btn @click="dialog = true" density="compact" icon="mdi-plus"></v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
export default {
  components: {},
  data() {
    return {
      dialog: false,
      dialogMessage: "",
    };
  },
  methods: {
    getBeerName() {
      return this.beer.name.substr(0, 25);
    },
  },
  props: ["beerId", "beer"],
};
</script>

<style scoped>
button {
  background-color: #16a085;
}
.container {
  min-width: 250px;
  max-width: 100%;
  min-height: 220px;
  border-radius: 0.5rem;
}
.container .header {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid var(--vt-c-divider-dark-2);
  color: var(--vt-c-black-mute);
}
.v-row {
  margin: auto;
}
</style>