import mongoose from 'mongoose'

const connectDB = (url) => {
  // 検索をするときに便利
  mongoose.set('strictQuery', true)

  mongoose
    .connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err))
}

export default connectDB
