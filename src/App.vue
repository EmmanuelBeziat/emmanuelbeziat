<template>
  <div class="site">
    <layout-header></layout-header>

    <div class="site-content">
      <layout-menu></layout-menu>
      <main class="site-main">
        <router-view transition="fade" transition-mode="out-in"></router-view>
      </main>
    </div>

    <layout-footer></layout-footer>
  </div>
</template>

<script>
import layoutHeader from 'components/layout/header'
import layoutMenu from 'components/layout/menu'
import layoutFooter from 'components/layout/footer'

export default {
  components: {
    layoutHeader,
    layoutMenu,
    layoutFooter
  }
}
</script>

<style lang="stylus">
@require './assets/stylus/main.styl'
</style>
