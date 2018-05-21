import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
const port = 5000

app.use(cors())
app.use(bodyParser.json({extended: false}))

app.get('/', (req, res) => {
  res.send('Publishing app')
})

app.listen(process.env.PORT || port)