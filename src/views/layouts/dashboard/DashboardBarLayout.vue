<template>
  <v-app-bar>
    <p class="ml-13 mr-14" style="padding-right: 2px">System Name / logo</p>
    <v-divider vertical />
    <v-app-bar-nav-icon :icon="IconEnum.BURGER_MENU_OPEN" @click="$emit('drawerToggle')" />
    <v-row />
    <v-btn icon>
      <v-badge dot color="primary">
        <v-icon color="grey" :icon="IconEnum.NOTIFICATION_BELL" />
      </v-badge>
    </v-btn>

    <div class="smallLine mx-3" />

    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" height="60">
          <div class="text-left">
            <p>{{ user.name }}</p>
            <p>{{ user.role }}</p>
          </div>
          <v-avatar :color="userImage ? '' : 'primary'" variant="tonal" size="35" class="ml-2 mb-1">
            <img v-if="userImage" width="35" height="35" :aspect-ratio="1" :src="userImage" cover />
            <span v-else class="font-weight-bold">{{ user.shortName }}</span>
          </v-avatar>
          <v-icon size="30" class="ml-2">mdi-menu-down</v-icon>
        </v-btn>
      </template>

      <v-card :width="280">
        <v-list density="compact">
          <v-list-item
            v-for="(item, key) in menuItem"
            :key="key"
            :value="item"
            @click="item.handler"
          >
            <template v-slot:prepend>
              <v-icon :icon="IconEnum.DEFAULT"></v-icon>
            </template>
            <v-list-item-title>
              <p>{{ item.name }}</p>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IconEnum } from '@/constants'
import NavigationLogo from '@/assets/logo.svg'
import { services } from '@/services'

export default defineComponent({
  name: 'DashboardBarLayout',
  emits: ['drawerToggle'],
  data() {
    return {
      IconEnum,
      NavigationLogo,
      user: {
        name: 'Layla',
        role: 'Maskman',
        shortName: ''
      },
      userImage: '',
      menuItem: [
        {
          name: 'View Profile'
        },
        {
          name: 'Change Password'
        },
        {
          name: 'About'
        },
        {
          name: 'Logout',
          handler: () => this.onLogoutHandle()
        }
      ]
    }
  },
  methods: {
    async onLogoutHandle() {
      services.AuthService.removeToken()
      await services.AuthService.logout()
    }
  }
})
</script>

<style scoped>
.smallLine {
  width: 1px;
  background-color: rgba(215, 214, 214, 0.889);
  height: 20px;
}
</style>
