import Vue from 'vue'

Vue.directive('linkable', {

  /**
   * Keep local links from dynamic content as part of the SPA
   * @return {void}
   */
  bind () {
    this.el.addEventListener('click', this.onClick.bind(this))
  },

  /**
   * Hijack local links and direct them to the router
   * @param  {Object} event The click event
   * @return {[type]}       [description]
   */
  onClick (event) {
    for (const el of event.path) {
      if (el === this.el || el.tagName === 'A') {
        if (el.hostname === window.location.hostname) {
          event.preventDefault()
          this.vm.$router.go({path: el.pathname})
        }
        break
      }
    }
  },

  /**
   * Unbind the click event
   * @return {void}
   */
  unbind () {
    this.el.removeEventListener('click', this.onClick)
  }
})
