<template>
  <v-container class="fill-height justify-center">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-flex xs4 sm4 md4>
        <v-card v-bind="{ loading: loading == true} "  class="elevation-4">
          <div class="bottle-face">

            <v-img
              contain
              height="300"
              src="@/assets/garupa.svg"
            />
          </div>
                      <v-card-text>
                         <v-form @submit.prevent="login" data-testid="login">
                            <v-text-field
                              v-model="email"
                               prepend-icon="person"
                               name="login"
                               label="Login"
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
                         <v-btn color="primary" @click="login()">Login</v-btn>
                      </v-card-actions>
                      <v-card-actions>
                         <v-spacer></v-spacer>
                         <v-btn color="primary" v-if="user.token" @click="user.testAuth()">Test Auth</v-btn>
                      </v-card-actions>
                   </v-card>
                  </v-flex>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useUserStore } from './../stores/user';

export default defineComponent({
  data () {
    return {
      feedData: [],
      changedTag: undefined,
      email: '',
      password: '',
      user: useUserStore(),
      loading: false
    }
  },
  mounted() {
    
  },
  methods: {
    async login() {
      this.loading = true
      const email = this.email
      const password = this.password;
      this.user.login(email,password).then( value => {
        this.$router.push("/dashboard");
      }).catch( err => {
        alert("Credenciais Incorretas")
      }).finally( () => {
        this.loading = false
      })
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
