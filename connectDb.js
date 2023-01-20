const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.mongoURI)
    console.log('Mongo DB connected')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB
