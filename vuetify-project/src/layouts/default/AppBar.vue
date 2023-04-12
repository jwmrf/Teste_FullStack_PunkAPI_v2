<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <div class="bottle-face">
            <v-img contain height="30" src="@/assets/garupa.svg" />
      </div>
      <div>
        &nbsp;&nbsp; Teste Garupa App
      </div>
    </v-app-bar-title>
    <v-menu v-if="user.token" :close-on-content-click="false" location="end">
      <template v-slot:activator="{ props }">
        <v-btn color="indigo" v-bind="props"> Usuário </v-btn>
      </template>

      <v-card min-width="300">
        <v-list>
          <v-list-item
            prepend-avatar="https://www.shutterstock.com/image-vector/thin-line-user-icon-on-260nw-519039097.jpg"
            :title="user.name"
          >
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="Logout()" color="primary" variant="text">
            Logout
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUserStore } from "./../../stores/user";
export default defineComponent({
  data() {
    return {
      user: useUserStore(),
      open: false,
    };
  },
  methods: {
    Logout() {
      this.user.logout();
      this.$router.push("/");
    },
  },
});
</script>
<style scoped>
.bottle-face {
  margin-right: 5%;
  position: absolute;
  width: 10px;
  transform: translateZ(20px);
}
</style>
