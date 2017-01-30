var blogConfig = require('./blog-config')

module.exports = {
  NODE_ENV: '"production"',
  SHORT_NAME: '"' + blogConfig.disqus + '"'
}
