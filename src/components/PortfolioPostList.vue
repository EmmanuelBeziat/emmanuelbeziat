<template>
  <section class="portfolio">
    <div v-if="$loadingRouteData" class="loader">
      <div class="loader__item"></div>
      <div class="loader__title">Chargement</div>
    </div>

    <div class="portfolio__list" v-if="!$loadingRouteData">
      <div class="portfolio__item" v-for="post in postList" v-if="datePast(post.date)">
        <div class="portfolio__layer portfolio__layer--{{ post.color }}">
          <svg class="portfolio__image icon" v-svg :sprite="post.image"></svg>
        </div>

        <div class="portfolio__caption">
          <h2 class="portfolio__title">{{ post.title }}</h2>

          <div class="portfolio__infos">
            <a v-link="{ name: 'portfolio-post', params: { slug: post.basename} }" class="portfolio__see-more">Jeter un oeil</a>
          </div>
        </div>
      </div>
    </div>

    <div class="c-note c-note--success" v-if="!$loadingRouteData">
			<div class="portfolio__thanks">
				Et bien d’autres au fil des ans <small>(merci, hé ! <i class="icon-heart"></i>)</small>
			</div>
		</div>
  </section>
</template>

<script>
import Moment from 'moment'

export default {
  data () {
    return {
      postList: []
    }
  },

  methods: {
    extractList: function (posts) {
      this.postList = posts
    },

    datePast: function (date) {
      return Moment(date).isBefore(Moment().format('YYYY-MM-DD hh:mm:ss'))
    }
  },

  route: {
    data (transition) {
      require.ensure('../posts/portfolio/meta.json', (require) => {
        const posts = require('../posts/portfolio/meta.json')
        const extractList = this.extractList(posts)

        transition.next({
          extractList
        })
      })
    }
  }
}
</script>
