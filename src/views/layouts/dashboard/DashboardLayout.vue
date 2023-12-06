<template>
  <v-app>
    <dashboard-bar-layout @drawer-toggle="drawerMenuToggle" />
    <dashboard-nav-drawer-layout :items="drawerItems" :rail="drawer" />
    <dashboard-main-layout />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NavigationDrawer, type NavigationItem } from '@/router/navigations/builder'
import DashboardBarLayout from './DashboardBarLayout.vue'
import DashboardNavDrawerLayout from './DashboardNavDrawerLayout.vue'
import DashboardMainLayout from './DashboardMainLayout.vue'

export default defineComponent({
  name: 'DashboardLayout',
  components: {
    DashboardBarLayout,
    DashboardNavDrawerLayout,
    DashboardMainLayout
  },
  props: {
    DrawerBuilder: {
      type: NavigationDrawer,
      required: true
    }
  },
  computed: {
    drawerItems(): NavigationItem[] {
      return this.DrawerBuilder.build()
    }
  },
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    $can(): boolean {
      return true
    },
    drawerMenuToggle() {
      this.drawer = !this.drawer
      console.log('jello', this.drawer)
    }
  }
})
</script>
