<template>
  <v-container style="max-width: 500px" class="fill-height justify-center">
    <v-dialog v-model="dialog" width="auto">
      <v-card>
        <v-card-text> {{ dialogMessage }}</v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-responsive class="d-flex align-center text-center fill-height">

        <v-card v-if="!register" v-bind="{ loading: loading == true }" class="elevation-4">
          <div class="bottle-face">
            <v-img contain height="300" src="@/assets/garupa.svg" />
          </div>
          <v-card-text>
            <v-form @submit.prevent="Login" data-testid="login">
              <v-text-field
                v-model="email"
                prepend-icon="person"
                name="login"
                label="Email"
                type="text"
              ></v-text-field>
              <v-text-field
                id="password"
                v-model="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!email || !password"
              color="primary"
              @click="Login()"
              >Login</v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="register = true">Criar Conta</v-btn>
          </v-card-actions>
        </v-card>
        <v-card v-else v-bind="{ loading: loading == true }" class="elevation-4">
          <div class="bottle-face">
            <v-img contain height="300" src="@/assets/garupa.svg" />
          </div>
          <v-card-text>
            <v-form @submit.prevent="Login" data-testid="login">
              <v-text-field
                v-model="name"
                prepend-icon="person"
                name="login"
                label="Nome"
                type="text"
              ></v-text-field>
              <v-text-field
                v-model="email"
                prepend-icon="person"
                name="login"
                label="Email"
                type="text"
              ></v-text-field>
              <v-text-field
                id="password"
                v-model="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!email || !password || !name"
              color="primary"
              @click="Register()"
              >Registrar</v-btn
            >
          </v-card-actions>
        </v-card>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useUserStore } from "./../stores/user";

export default defineComponent({
  data() {
    return {
      feedData: [],
      changedTag: undefined,
      name: "",
      email: "",
      password: "",
      user: useUserStore(),
      loading: false,
      dialog: false,
      register: false,
      dialogMessage: ""
    };
  },
  mounted() {},
  methods: {
    async Login() {
      this.loading = true;
      const email = this.email;
      const password = this.password;
      this.user
        .login(email, password)
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch(() => {
          this.dialogMessage = "Credenciais Incorretas, tenve novamente!"
          this.dialog = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async Register() {
      this.loading = true;
      const email = this.email;
      const password = this.password;
      const name = this.name
      this.user
        .register(name, email, password)
        .then(() => {
          this.register = false
          this.dialogMessage = "Usuário criado com sucesso!"
          this.dialog = true;
        })
        .catch(() => {
          this.dialogMessage = "Este email já está em uso!"
          this.dialog = true;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
});
</script>
<style scoped>
.bottle-face {
  margin-left: 1%;
  position: absolute;
  width: 40px;
  transform: translateZ(20px);
}
</style>
