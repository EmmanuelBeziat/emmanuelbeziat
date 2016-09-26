<template>
  <nav class="site-menu">
    <button class="site-menu__button" @click="menuMobile"><span class="site-menu__icon" aria-hidden="true"><span></span></span> Menu</button>
    <a class="site-menu__link" v-link="{ name: 'home', exact: true }">Accueil</a>
    <a class="site-menu__link" v-link="{ name: 'portfolio' }">Portfolio</a>
    <a class="site-menu__link" v-link="{ name: 'blog' }">Blog</a>
  </nav>
</template>

<script>
export default {
  methods: {
    menuMobile: function (event) {
      event.stopPropagation()
      event.target.parentNode.classList.toggle('site-menu--is-open')
    }
  }
}
</script>
