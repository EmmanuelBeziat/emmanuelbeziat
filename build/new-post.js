require('shelljs/global')

var fs = require('fs-extra')
var path = require('path')
var slug = require('slug')
var moment = require('moment')
var inquirer = require('inquirer')

var questions = [{
        type: 'list',
        name: 'type',
        message: 'Do you want to write an article or add a new portfolio item?',
        choices: ['Articles', 'Portfolio'],
        filter: function(val) {
            return val.toLowerCase()
        }
    },
    {
        type: 'input',
        name: 'date',
        message: 'Date to use (tip: if you submit a date in the future, your post won’t be visible until then):',
        default: moment().format('YYYY-MM-DD hh:mm:ss'),
        validate: function(value) {
            var pass = value.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})[ \/](\d{1,2})[:\/](\d{1,2})[:\/](\d{1,2})$/)
            if (pass) return true
            return 'Please enter a valid date (format YYYY-MM-DD hh:mm:ss)'
        }
    },
    {
        type: 'input',
        name: 'image',
        message: 'Image to use in social medias:',
        default: 'https://images.emmanuelbeziat.com/social-default-fb.jpg',
        when: postType('articles')
    },
    {
        type: 'input',
        name: 'image',
        message: 'SVG ID to use in thumbnail:',
        default: '#default',
        when: function(answers) {
            return !postType('articles')(answers)
        },
        validate: function(value) {
            var pass = value.match(/^#\w{2,20}$/)
            if (pass) return true
            return 'Please enter a valid svg ID'
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'Choose a title for your post:',
        validate: function(value) {
            if (value.value !== '') return true

            return 'Please enter a valid title'
        }
    },
    {
        type: 'checkbox',
        name: 'tags',
        message: 'Select tags (you’ll be able to add more manually in the file):',
        choices: [
            new inquirer.Separator('Code'),
            { name: 'html/css' },
            { name: 'javascript' },
            { name: 'workflow' },
            { name: 'bonnes pratiques' },
            { name: 'mauvaises pratiques' },
            new inquirer.Separator('Related'),
            { name: 'design' },
            { name: 'branding' },
            { name: 'aide' },
            { name: 'seo' },
            { name: 'informatique' },
            { name: 'navigateurs' },
            new inquirer.Separator('Misc.'),
            { name: 'découvertes' },
            { name: 'téléphone' },
            { name: 'lien' }
        ],
        when: postType('articles')
    },
    {
        type: 'checkbox',
        name: 'tags',
        message: 'Select tags (you’ll be able to add more manually in the file):',
        choices: [
            new inquirer.Separator('Code'),
            { name: 'html/css' },
            { name: 'javascript' },
            new inquirer.Separator('CMS'),
            { name: 'drupal' },
            { name: 'wordpress' },
            new inquirer.Separator('Social'),
            { name: 'facebook' }
        ],
        when: function(answers) {
            return !postType('articles')(answers)
        }
    },
    {
        type: 'checkbox',
        name: 'categories',
        message: 'Select a category (you’ll be able to add more manually in the file):',
        choices: [
            { name: 'Tutoriels' },
            { name: 'Diatribes' },
            { name: 'Web' }
        ],
        when: postType('articles')
    },
    {
        type: 'checkbox',
        name: 'colors',
        message: 'Select a color (you’ll be able to add more manually in the file):',
        choices: [
            { name: 'blue' },
            { name: 'green' },
            { name: 'yellow' },
            { name: 'red' },
            { name: 'black' },
            { name: 'purple' }
        ],
        when: function(answers) {
            return !postType('articles')(answers)
        }
    },
    {
        type: 'confirm',
        name: 'publish',
        message: 'Would you like to publish this post?',
        default: true
    },
    {
        type: 'confirm',
        name: 'disqus',
        message: 'Allow comments on this post?',
        default: true,
        when: postType('articles')
    }
]

function postType(type) {
    return function(answers) {
        return answers[type] === 'articles' ? false : true
    }
}

console.log('New post creation command…')
inquirer.prompt(questions).then(function(answers) {

    var filePath = 'src/posts/' + answers.type + '/'
	var fileName = moment(answers.date).format('YYYY-MM-DD') + '-' + slug(answers.title, [{ lower: true }]).toLowerCase() + '.md'
    var fileContent = ''

    if (answers.type === 'articles') {
        fileContent = '---' +
            '\ntitle: ' + answers.title +
            '\ndate: ' + answers.date +
            '\nimage: ' + answers.image +
            '\ntags: ' + JSON.stringify(answers.tags) +
            '\ncategories: ' + JSON.stringify(answers.categories) +
            '\ndisqus: ' + answers.disqus +
            '\npublish: ' + answers.publish +
            '\n---\n\n'
    } else {
        fileContent = '---' +
            '\ntitle: ' + answers.title +
            '\ndate: ' + answers.date +
            '\nimage: ' + answers.image +
            '\ncolor: ' + answers.color +
            '\nclients: ' +
            '\ntags: ' +
            '\n---\n\n'
    }

    fs.writeFile(filePath + fileName, fileContent, (err) => {
        if (err) {
            console.log('Error during file creation')
            throw err
        } else {
            console.log('File succesfully created')
        }
    })
});
