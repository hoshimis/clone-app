import express from 'express'
import * as dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary'

import Post from '../mongodb/models/post.js'

dotenv.config()

const router = express.Router()

// cloudinary の設定
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

// 全投稿を取得するためのgetルート
router.route('/').get(async (req, res) => {
  try {
    const post = await Post.find({})
    res.status(200).json({ success: true, data: post })
  } catch (error) {
    res.status(500).json({ success: false, message: error })
  }
})

// 投稿するための postルート
router.route('/').post(async (req, res) => {
  try {
    // フロントエンドから取得されるデータをすべて取得する。
    // 送信されたオブジェクトを展開する。
    const { name, prompt, photo } = req.body
    // uploadし、それを保存して写真のURLを返す。
    const photoUrl = await cloudinary.uploader.upload(photo)

    // URLを共有してDBに新規投稿を作成する。
    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url
    })

    // 201でnewPostを返す
    res.status(201).json({ success: true, data: newPost })
  } catch (error) {
    res.status(500).json({ success: false, message: error })
  }
})

export default router
