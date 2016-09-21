<template>
  <div class="blog">
    <div v-if="$loadingRouteData" class="loader">
      <div class="loader__item"></div>
      <div class="loader__title">Chargement</div>
    </div>

    <article class="post" v-if="!$loadingRouteData">
      <header class="post__header">
        <h1 class="post__title">{{ post.title }}</h1>

        <div class="post__infos">
          <div class="post__date">Posté le <time>{{ post.date || moment 'ddd Do MMM YYYY[, à] HH[h]mm' }}</time></div>

          <div class="flex">
            <div class="post__tags">
              <span class="c-tag" v-for="tag in post.tags">{{ tag }}</span>
            </div>

            <div class="post__share"></div>
          </div>
        </div>
      </header>

      <div class="post__content" v-linkable>{{{ content }}}</div>

      <footer class="post__footer">
        <div class="flex">
          <div class="post__tags">
            <span class="c-tag" v-for="tag in post.tags">{{ tag }}</span>
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
import markdown from 'marksown-parse'

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
      post: {
        title: 'Chargement…',
        tags: ['test'],
        date: new Date(),
        content: 'pouet'
      }
    }
  },

  components: {
    Disqus
  },

  route: {
    data (transition) {
      /* let year = transition.to.params.year
      let month = transition.to.params.month
      let day = transition.to.params.day
      let basename = transition.to.params.basename */
      let fileName = '${year}-${month}-${day}-' + basename

      require('../posts/articles/' + fileName + '.md')((exports) => {
        console.log(exports)
        transition.next({
          post.content: md(exports.content)
        })
      })
    }
  }
}
</script>
