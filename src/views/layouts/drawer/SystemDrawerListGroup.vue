<template>
  <v-list-group>
    <template v-if="!rail" v-slot:activator="{ props }">
      <v-list-item v-bind="props" :title="name" :prepend-icon="icon" append-icon="">
        <template v-if="item.children" v-slot:append="{ isActive }">
          <v-icon :icon="isActive ? 'mdi-menu-up' : 'mdi-menu-down'"></v-icon>
        </template>
      </v-list-item>
    </template>

    <system-drawer-list-item v-for="(menu, key) in item.children" :item="menu" :key="key" />
  </v-list-group>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import SystemDrawerListItem from './SystemDrawerListItem.vue'
export default defineComponent({
  name: 'SystemDrawerListGroup',
  components: {
    SystemDrawerListItem
  },
  props: {
    rail: {
      type: Boolean,
      default: () => false
    },
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    icon() {
      return this.item.meta.icon
    },
    name(): any {
      const key = this.item.meta.title
      return this.$t(key)
    }
  }
})
</script>

<style lang="scss" scoped>
.v-list-group__items .v-list-item {
  padding: 8px !important;
}
</style>
