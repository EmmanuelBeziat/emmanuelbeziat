require('shelljs/global')

var fs = require('fs-extra')
var path = require('path')
var slug = require('slug')
var color = require('color')
var moment = require('moment')
var inquirer = require('inquirer')

console.log('New post creation command…'.yellow)

var questions = [
  {
    type: 'list',
    name: 'type',
    message: 'Do you want to write an article or add a new portfolio item?',
    choices: ['Articles', 'Portfolio'],
    filter: function (val) {
      return val.toLowerCase()
    }
  },
  {
    type: 'input',
    name: 'date',
    message: 'Date to use (YYYY-MM-DD):',
    default: moment().format('YYYY-MM-DD'),
    validate: function (value) {
      var pass = value.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/)

      if (pass) return true

      return 'Please enter a valid date (format YYYY-MM-DD)'
    }
  },
  {
    type: 'input',
    name: 'title',
    message: 'Choose a title for your post:',
    validate: function (value) {
      if (value.value !== '') return true

      return 'Please enter a valid title'
    }
  }
]

inquirer.prompt(questions).then(function (answers) {
  var filePath = 'src/posts/' + answers.type + '/'
  var fileName = answers.date + '-' + slug(answers.title, [{ lower: true }]).toLowerCase() + '.md'
  var fileContent = ''

  if (answers.type === 'articles') {
    fileContent = '---' +
      '\ntitle: ' + answers.title +
      '\ndate: ' + answers.date + ' 00-00-00' +
      '\ntags: ' +
      '\ncategories: ' +
      '\n---' +
      '\n\n### ' + answers.title
  }
  else {
    fileContent = '---' +
      '\ntitle: ' + answers.title +
      '\ndate: ' + answers.date + ' 00-00-00' +
      '\nimage: ' +
      '\ncolor: ' +
      '\nclients: ' +
      '\ntags: ' +
      '\n---\n\n'
  }

  fs.writeFile(filePath + fileName, fileContent, (err) => {
    if (err) throw err

    console.log('File succesfully created'.green)
  })
});
