import mongoose from 'mongoose'

//  スキーマの作成
const Post = new mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true }
})

// モデルの作成
const PostSchema = mongoose.model('Post', Post)

export default PostSchema
