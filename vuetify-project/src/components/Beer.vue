<template>
  <div class="container v-col-lg-1">
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
  props: ["tag", "beerId", "beer"],
};
</script>

<style scoped>
img {
  padding: 5px;
}
button {
  background-color: #16a085;
}
.container {
  max-width: 300px;
  min-height: 220px;
  background: var(--vt-c-white-mute);
  border-radius: 0.5rem;
}

.container:not(:last-of-type) {
  margin-right: 0.5rem;
}

.container .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid var(--vt-c-divider-dark-2);
  color: var(--vt-c-black-mute);
}
.header {
  padding: 0.3rem;
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>