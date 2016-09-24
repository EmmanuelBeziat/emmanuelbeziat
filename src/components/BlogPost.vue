<template>
  <div class="blog">
    <div v-if="$loadingRouteData" class="loader">
      <div class="loader__item"></div>
      <div class="loader__title">Chargement</div>
    </div>

    <article class="post" v-if="!$loadingRouteData">
      <header class="post__header">
        <h1 class="post__title">{{ title }}</h1>

        <div class="post__infos">
          <div class="post__date">Posté le <time>{{ date | moment 'ddd Do MMM YYYY[, à] HH[h]mm' }}</time></div>

          <div class="flex">
            <div class="post__tags">
              <span class="c-tag" v-for="tag in tags">{{ tag }}</span>
            </div>

            <div class="post__share"></div>
          </div>
        </div>
      </header>

      <div class="post__content" v-linkable>{{{ content }}}</div>

      <footer class="post__footer">
        <div class="flex">
          <div class="post__tags">
            <span class="c-tag" v-for="tag in tags">{{ tag }}</span>
          </div>

          <div class="post__share"></div>
        </div>

        <div class="post__help">
          Un problème ? Une question ? <br>Vous pouvez me contacter sur <a href="https://www.twitter.com/EmmanuelBeziat" target="_blank">Twitter</a>, poster un ticket sur <a href="https://github.com/EmmanuelBeziat/emmanuelbeziat/issues" target="_blank">Github</a>, ou bien créer un sujet sur un forum d’entraide comme <a href="https://zestedesavoir.com/" target="_blank">ZesteDeSavoir</a>, <a href="https://openclassrooms.com/dashboard" target="_blank">OpenClassrooms</a>, <a href="http://www.alsacreations.com/" target="_blank">Alsacréations</a>…
        </div>
      </footer>

    </article>

    <div class="comments" v-if="!$loadingRouteData">
      <disqus shortname="emmanuelbeziat"></disqus>
    </div>
  </div>
</template>

<script>
import Disqus from 'vue-disqus'
import SmoothScroll from 'smooth-scroll'
import Prism from 'prismjs'
import 'prismjs/plugins/show-language/prism-show-language.min.js'
import 'prismjs/components/prism-bash.min.js'

var md = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: true
})
.use(require('markdown-it-attrs'))
.use(require('markdown-it-block-embed'), {
  containerClassName: 'video',
  serviceClassPrefix: 'video--',
  outputPlayerSize: false,
  allowFullScreen: true
})
.use(require('markdown-it-anchor'), {
  permalink: false,
  permalinkClass: 'icon-link post__anchor',
  permalinkSymbol: ''
})

module.exports = {
  data () {
    return {
      content: '',
      title: '',
      date: new Date(),
      tags: []
    }
  },

  components: {
    Disqus
  },

  methods: {
    getPostName: function (posts, basename) {
      let fileName
      posts.forEach(function (post) {
        if (post.basename === basename) {
          fileName = '../posts/articles/' + post.path
        }
      })
      return fileName
    }
  },

  route: {
    data (transition) {
      let basename = transition.to.params.slug

      require.ensure('../posts/articles/meta.json', (require) => {
        const posts = require('../posts/articles/meta.json')
        const getPostName = this.getPostName(posts, basename)

        console.log(getPostName)

        require('../posts/articles/2015-10-25-un-site-qui-prend-toute-la-hauteur-disponible.md')((exports) => {
          transition.next({
            content: md.render(exports.rawContent),
            date: exports.metaData.date,
            tags: exports.metaData.tags,
            title: exports.metaData.title
          })
        })
      })
    }
  },

  ready () {
    // Ignitiate code hightlighting with PrismJS
    setTimeout(function () {
      Prism.highlightAll()
    }, 10)

    // Smooth Scroll
    SmoothScroll.init()
  }
}
</script>
