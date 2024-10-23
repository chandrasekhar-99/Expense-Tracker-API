const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const dotenv = require('dotenv');

const dbConnect = require('./config/config');
const transactionsRoute = require('./routes/transactions');

const app = express();
dotenv.config();
dbConnect();

app.use(bodyParser.json())
app.use(cors());

app.get("/", (req,res)=>{
  res.json("transaction started");
})

app.use('/transactions', transactionsRoute);

const PORT = process.env.PORT || 5001;

app.listen(PORT , () => {
  console.log("transaction PORT working")
})