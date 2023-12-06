<template>
  <v-list-item :title="name" :active="active" :value="name" :prepend-icon="icon" :to="to(item)">
    <template v-if="customIcon" v-slot:prepend>
      <v-svg-icon tag="i" class="v-icon v-icon--size-default" :icon="customIcon"></v-svg-icon>
    </template>
    <template v-if="badge > 0" v-slot:append>
      <v-badge color="#B33029" :content="badge" :value="badge" inline></v-badge>
    </template>
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { NavigationItem } from '@/router/navigations/builder'
import type { RouteLocationRaw } from 'vue-router'

export default defineComponent({
  name: 'SystemDrawerListItem',
  props: {
    item: {
      type: Object as PropType<NavigationItem>,
      required: true
    }
  },
  data() {
    return {
      badge: 0,
      active: false
    }
  },
  computed: {
    icon() {
      return this.item.meta?.icon as string
    },
    name(): string {
      const key = this.item.meta?.title as string
      return this.$t(key)
    },
    customIcon() {
      return this.item.meta?.customIcon as string
    }
  },
  mounted() {},
  methods: {
    to(item: NavigationItem): RouteLocationRaw {
      const matched = this.$route.matched.map(
        (matched) => matched.meta.title === (item.meta?.title || '')
      )
      if (matched.some(Boolean)) {
        this.active = true
        // ? If item matched current route,
        // ? Keep the route the same to avoid blank screen
        return this.$route
      } else {
        this.active = false
        // ? Otherwise navigate to the new route
        return {
          name: item.name as string
        }
      }
    }
  }
})
</script>
