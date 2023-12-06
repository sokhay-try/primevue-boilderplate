<template>
  <v-app>
    <v-main key="content">
      <v-container :class="containerClass" fluid>
        <v-row>
          <v-col cols="12" class="text-center pa-0 mb-11" v-if="!isRouteRedirectAndLogout">
            <img width="185" :src="LogoAsset" alt="Avatar" />
          </v-col>
          <slot>
            <router-view></router-view>
          </slot>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LogoAsset from '@/assets/logo.svg'
import { RouteName } from '@/constants'

export default defineComponent({
  name: 'AuthLayout',
  props: {
    fillHeight: {
      type: Boolean,
      default: () => true
    }
  },
  computed: {
    LogoAsset: () => LogoAsset,
    containerClass() {
      return {
        'fill-height': this.fillHeight
      }
    },
    isRouteRedirectAndLogout() {
      return (
        this.$route.name === RouteName.AUTH.REDIRECT || this.$route.name === RouteName.AUTH.LOGOUT
      )
    }
  }
})
</script>

<style scoped>
.v-container {
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
