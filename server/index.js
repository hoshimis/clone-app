import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './mongodb/connect.js'

import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config()

const app = express()
// ミドルウェアにcorsを追加
app.use(cors())
// オプションの受け取りを50mbまでに制限する
app.use(express.json({ limit: '50mb' }))

// apiのエンドポイントを作成することでフロント側からフックすることが可能になる。
app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

// CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.get('/', async (req, res) => {
  res.send('Hello world!')
})

// サーバの起動
const startServer = async () => {
  // mogodbに接続する
  try {
    connectDB(process.env.MONGODB_URL)
    app.listen(8080, () =>
      console.log('Server has started on port http://localhost:8080')
    )
  } catch (error) {
    console.log(error)
  }
}

startServer()
