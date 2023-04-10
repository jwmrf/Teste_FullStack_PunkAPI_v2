<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
  props: {
    token: String
  },
  data() {
    return {
      isRobotReCaptcha: true,
      hasLoginError: false,
      isPwsVisible: false,
      isLoading: false,
      email: "",
      password: "",
      logged: false,
      forget: false,
      newAcc: false,
      fieldIsValid: true,
      newUser: {
        id: "",
        name: "",
        subname: "",
        CPF: "",
        active: true,
        username: "",
        phone_number: "",
        phone_number_t: "",
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: "",
        date_purchase: "",
        date_of_expiration: "",
        approved_date: "",
        plan: "",
        transaction_id: "",
        trial_date: "",
        first_access: true,
        trial_isValid: true,
        mercado_pago: false,
        demo: true,
        demo_date: "",
        is_adm: false,
        telegram: "",
        telegram_id: "",
        id_hotmart: "",
        hotmart: true,
        updated_date: "",
        product: "",
        client: { name: "" },
        group: { text: "" },
      },
    };
  },
  mounted() {
  },
  methods: {
  }
})
</script>
<template>
    <div class="container is-fluid is-mobile has-text-centered">
      <section class="hero is-fullheight">
        <div class="hero-body center" center>
            <v-card text="..."></v-card>
        </div>
      </section>
    </div>
  </template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=K2D");

* {
  font-family: "K2D", "Arial";
}

.box {
  /* From https://css.glass */
  background: rgba(48, 48, 48, 0.596);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16.2px);
  -webkit-backdrop-filter: blur(16.2px);
  border: 1px solid rgba(213, 213, 213, 0.1);
}

video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

.loginButon {
  text-align: center;
  border-bottom: 10p;
  right: 60%;
  bottom: 10px;
}

.field a.pull-left:hover {
  background-color: rgba(15, 133, 166, 0.086);
  border-radius: 5px;
}

.registration {
  background: rgba(48, 48, 48, 0.596);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16.2px);
  -webkit-backdrop-filter: blur(16.2px);
  border: 1px solid rgba(213, 213, 213, 0.1);
  width: 600px !important;
  margin: 0 auto;
  padding: 0px 20px 20px 20px;
}

.registration .card-text {
  font-size: 20px;
  line-height: 70px;
}

.captcha {
  margin: 0 auto 20px auto;
  width: 0px;
  height: 80px;
}

.labelForm /deep/ .label {
  color: #ffffff;
}
</style>
