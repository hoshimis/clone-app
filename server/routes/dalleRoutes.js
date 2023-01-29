import express from 'express'
import * as dotenv from 'dotenv'
import { Configuration, OpenAIApi } from 'openai'

dotenv.config()

const router = express.Router()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)
router.route('/').get((req, res) => {
  res.send('hello from dall-e!')
})

router.route('/').post(async (req, res) => {
  try {
    // リクエストのbodyからpromptを取得する
    const { prompt } = req.body
    // openaiに送信されたpromptを投げる。
    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json'
    })

    // レスポンスからimageを取り出す
    const image = aiResponse.data.data[0].b64_json
    // status200でimageを返す。
    res.status(200).json({ photo: image })
  } catch (error) {
    console.log(error)
    // status500でエラーメッセージを返す
    res.status(500).send(error?.response.data.error.message)
  }
})

export default router
