

const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()



const dbConnect = async() => {
  const url = process.env.MONGO_URI
  try{
    await mongoose.connect(url);
    console.log("DB Connected")
  }catch{
    console.log("DB connection failed")
  }
}

module.exports = dbConnect;