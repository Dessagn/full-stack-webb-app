const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const port = 5000
mongoose.connect('mongodb://localhost/mydb')

const articleSchema = {
  articleTitle: String,
  articleContent: String
}

const Article = mongoose.model('Article', articleSchema, 'articles')

app.use(cors())
app.use(bodyParser.json({extended: false}))
app.use(express.static('dist'))

app.get('/', (req, res) => {
  // res.send('Publishing app')
  Article.find((err, articleDoc) => {
    const ourArticles = articleDoc.map(article => {
      return (`<div>
      <h2>${article.articleTitle}</h2>
      <h4>${article.articleContent}</h4>
      </div>`)
    }).join('<br />')
  })
  res.send(`<h1>Publishing Initial App</h1>`) (`${ourArticles}` )
  console.log(ourArticles)
})

app.listen(process.env.PORT || port, () => {
  console.log('App is running at http://localhost:5000')
})