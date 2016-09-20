<template>
  <section class="blog">
    <div class="post-list" v-if="!$loadingRouteData">
      <article class="post-list__item" v-for="post in postlist">
      </article>
    </div>

    <div v-if="$loadingRouteData" class="loader">
      <div class="loader__item"></div>
      <div class="loader__title">Chargement</div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      postlist: []
    }
  },

  methods: {
    extractPosts: function (posts) {
      let archive = {}
      let ret = []

      for (let post of posts) {
        archive.push(post)
      }

      for (let year in archive) {
        ret.push([year, archive[year]])
      }

      ret.sort((a, b) => parseInt(b[0]) > parseInt(a[0]) ? 1 : -1)
      return ret
    }
  },

  route: {
    data (transition) {
      require.ensure('../../posts/articles/meta.json', (require) => {
        const posts = require('../../posts/articles/meta.json')
        const postlist = this.extractPosts(posts)

        transition.next({
          postlist
        })
      })
    }
  }
}
</script>
