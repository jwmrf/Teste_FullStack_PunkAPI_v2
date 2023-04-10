<template>
    <v-container class="fill-height justify-center">
      <v-responsive class="d-flex align-center text-center fill-height">
        <v-flex xs4 sm4 md4>
            oi
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
        user: useUserStore()
      }
    },
    mounted() {
      
    },
    methods: {
      async login() {
        const email = this.email
        const password = this.password;
        await this.user.login(email,password)
      }
    },
  });
  </script>
  <style scoped>
  </style>
  