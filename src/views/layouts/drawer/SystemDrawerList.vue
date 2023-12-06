<template>
  <v-list nav :open-strategy="'multiple'" v-model:opened="open">
    <template v-for="(item, key) in items">
      <system-drawer-list-group
        v-if="item.hasOwnProperty('children')"
        :key="`group-${key}`"
        :item="item"
        :value="item.meta?.title"
        :rail="rail"
      />
      <system-drawer-list-item v-else :key="`item-${key}`" :item="item" />
    </template>
  </v-list>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import SystemDrawerListGroup from './SystemDrawerListGroup.vue'
import SystemDrawerListItem from './SystemDrawerListItem.vue'

export default defineComponent({
  components: {
    SystemDrawerListGroup,
    SystemDrawerListItem
  },
  props: {
    rail: {
      type: Boolean,
      default: () => false
    },
    items: {
      type: Array<any>,
      default: () => []
    }
  },
  data() {
    return {
      open: this.items.map((item) => {
        return item.meta?.title
      })
    }
  }
})
</script>
