<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from './stores/user';
import Webservices from './services/web'
const ws = new Webservices('default')
ws.setToken(useUserStore().token)
</script>
