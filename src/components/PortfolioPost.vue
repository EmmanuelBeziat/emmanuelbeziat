<template>
  <div class="blog">
    <div v-if="$loadingRouteData" class="loader">
      <div class="loader__item"></div>
      <div class="loader__title">Chargement</div>
    </div>

    <article class="post portfolio" v-if="!$loadingRouteData">
      <header class="post__header">
        <h1 class="post__title">{{ title }}</h1>

        <div class="post__infos">
          <div class="flex">
            <div class="post__tags">
              <span class="c-tag" v-for="tag in tags">{{ tag }}</span>
            </div>

            <div class="post__tags">
              <span class="c-tag" v-for="client in clients">{{ client }}</span>
            </div>
          </div>
        </div>
      </header>

      <div class="post__content" v-linkable>{{{ content }}}</div>

      <footer class="post__footer">
        <a class="post__navigation post__navigation--previous icon-arrow-left" v-link="{ name: 'portfolio', activeClass: '' }">Revenir au portfolio</a>
      </footer>

    </article>
  </div>
</template>

<script>
var md = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: true
})
.use(require('markdown-it-block-embed'), {
  containerClassName: 'video',
  serviceClassPrefix: 'video--',
  outputPlayerSize: false,
  allowFullScreen: true
})

module.exports = {
  data () {
    return {
      content: null,
      title: null,
      tags: null,
      clients: null
    }
  },

  methods: {
    getPostName: function (posts, basename) {
      let fileName
      posts.forEach(function (post) {
        if (post.basename === basename) {
          fileName = '/' + post.path
        }
      })
      return fileName
    }
  },

  route: {
    data (transition) {
      let basename = transition.to.params.slug

      require.ensure('../posts/portfolio/meta.json', (require) => {
        const posts = require('../posts/portfolio/meta.json')
        const getPostName = this.getPostName(posts, basename)

        require('../posts/portfolio' + getPostName)((exports) => {
          transition.next({
            content: md.render(exports.rawContent),
            clients: exports.metaData.clients,
            tags: exports.metaData.tags,
            title: exports.metaData.title
          })
        })
      })
    }
  }
}
</script>
