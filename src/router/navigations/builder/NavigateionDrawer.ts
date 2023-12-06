import type { RouteMeta, RouteRecordRaw } from 'vue-router'
import { RouteName } from '@/constants'

export interface NavigationItem {
  name: string | null | undefined | symbol
  path: string
  meta: RouteMeta | undefined
  children?: NavigationItem[] | undefined
}

interface NavigationDrawerConfig {
  items: RouteRecordRaw[]
}

export class NavigationDrawer {
  public items: RouteRecordRaw[] = []

  constructor(options?: NavigationDrawerConfig) {
    if (options?.items) {
      this.items = options.items
    }
  }

  /**
   * Add a route
   * @param route
   */
  public addRoute(route: RouteRecordRaw) {
    this.items.push(route)
  }

  /**
   * Add a collection of routes
   * @param routes
   */
  public addRoutes(routes: RouteRecordRaw[] = []) {
    routes.forEach((route) => this.addRoute(route))
  }

  /**
   * Build final route collection
   * @param $can
   * @returns
   */
  public build() {
    return this.builder(this.items)
  }

  private builder(routes: RouteRecordRaw[]): NavigationItem[] {
    const items = routes.reduce<NavigationItem[]>((navItems, route) => {
      const item: NavigationItem = {
        name: route.name,
        path: route.path,
        meta: route.meta
      }

      if (route.children) {
        const children = this.builder(route.children)

        if (!children.length) return navItems
        item.children = children
      }

      navItems.push(item)

      return navItems
    }, [])

    return items
  }
}
