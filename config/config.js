

const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()



const dbConnect = async() => {
  const url = process.env.MONGO_URI
  try{
    await mongoose.connect(url,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      socketTimeoutMS: 30000, 
      connectTimeoutMS: 30000
    });
    console.log("DB Connected")
  }catch{
    console.log("DB connection failed")
  }
}

module.exports = dbConnect;