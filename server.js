const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

const mdburl = 'mongodb://localhost/blog'

mongoose.set('strictQuery', false)
mongoose.connect(mdburl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.set('view-engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use('/articles', articleRouter)

app.get('/', (req, res) => {
  const articles = [
    {
      title: 'Test article',
      createdAt: new Date(),
      description: 'Test desc',
    },
  ]
  res.render('articles/index.ejs', { articles: articles })
})

app.listen(3000)
