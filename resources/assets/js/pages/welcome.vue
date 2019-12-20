<template>
  <div>
    <div class="top-right links">
      <template v-if="authenticated">
        <router-link :to="{ name: 'search' }">
          {{ $t('home') }}
        </router-link>
      </template>
      <template v-else>
        <router-link :to="{ name: 'login' }">
          {{ $t('login') }}
        </router-link>
      </template>
    </div>

    <router-link :to="{ name: user ? 'welcome' : 'search' }" class="text-center">
      <img src="/images/logo-medium.png" :alt="appName" class="logo-medium">
    </router-link>

    <div class="text-center">
      <div class="title mb-4">
        <router-link :to="{ name: user ? 'welcome' : 'search' }" class="logo-text">
          {{ title }}
        </router-link>
      </div>

      <div class="links">
        <a href="https://github.com/MegaMaid/MegaMaid" target="_blank">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'basic',

  metaInfo () {
    return { title: this.$t('home') }
  },

  data: () => ({
    title: window.config.appName
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  })
}
</script>

<style scoped>
.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}

.title {
  font-size: 85px;
}

img.logo-medium {
    opacity: 0.575;
}

.title .logo-text {
  color: rgb(99, 107, 111);
}
</style>
