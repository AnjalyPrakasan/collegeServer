const mongoose = require('mongoose')
require('dotenv').config()

//main

async function main()
{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Mongoose Connected")
}

module.exports = main