<template>
  <v-container class="fill-height justify-center">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-flex xs4 sm4 md4>
        <v-card class="elevation-4">
          <div class="bottle-face">

            <v-img
              contain
              height="300"
              src="@/assets/garupa.svg"
            />
          </div>
                      <v-card-text>
                         <v-form>
                            <v-text-field
                               prepend-icon="person"
                               name="login"
                               label="Login"
                               type="text"
                            ></v-text-field>
                            <v-text-field
                               id="password"
                               prepend-icon="lock"
                               name="password"
                               label="Password"
                               type="password"
                            ></v-text-field>
                         </v-form>
                      </v-card-text>
                      <v-card-actions>
                         <v-spacer></v-spacer>
                         <v-btn color="primary" to="/">Login</v-btn>
                      </v-card-actions>
                   </v-card>
                  </v-flex>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
  //
</script>
<style scoped>
.bottle-face:nth-child(4) {
}
.bottle-face {
  position: absolute;
  width: 40px;
  transform: translateZ(20px);
}
</style>
