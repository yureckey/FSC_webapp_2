<template>
  <q-layout view="hHh Lpr lff">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>FSC APP 2 - Qualification for a remote audit</q-toolbar-title>

        <div>🌳⸙🌲🌴</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      overlay
      bordered
      content-class="bg-grey-1"
    >
      <q-scroll-area class="fit">
        <q-list v-for="(menuItem, index) in menuList" :key="index">

          <!-- :active="menuItem.label === 'Outbox'" -->
          <q-item clickable :to="menuItem.to" exact v-ripple>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>

          <q-separator v-if="menuItem.separator" />

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  }
]

const menuList = [
  {
    icon: 'account_circle',
    label: 'Login',
    to: '/login',
    separator: true
  },
  {
    icon: 'rule',
    label: 'Comment and Flag',
    to: '/page1',
    separator: false
  },
  {
    icon: 'map', // language
    label: 'Spatial Analysis',
    to: '/page2',
    separator: false
  },
  {
    icon: 'thumbs_up_down', //
    label: 'Final Decision',
    to: '/page3',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Settings',
    to: '/login',
    separator: false
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    to: '/login',
    separator: false
  }
]

export default {
  name: 'MainLayout',
  // components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      menuList
    }
  }
}
</script>
