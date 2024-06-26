const mongoose = require('mongoose')
const main = require('./database')

//main
main().catch(err => console.log(err))

//schema
const clgSchema = new mongoose.Schema(
    {
        name : {type:String},
        address : {type:String},
        location : {type:String}
    }
)

//model
const clgModel = new mongoose.model('clg_tbl',clgSchema)

module.exports = {
    clgModel
}