<template>
  <v-navigation-drawer v-model="drawer" permanent :rail="rail">
    <system-drawer-list :items="items" :rail="rail" />
  </v-navigation-drawer>
</template>

<script lang="ts">
import type { NavigationItem } from '@/router/navigations/builder'
import SystemDrawerList from '../drawer/SystemDrawerList.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DashboardNavDrawerLayout',
  components: {
    SystemDrawerList
  },
  props: {
    rail: {
      type: Boolean,
      default: () => false
    },
    items: {
      type: Array<NavigationItem>,
      default: () => []
    }
  },
  data() {
    return {
      drawer: true
    }
  }
})
</script>
