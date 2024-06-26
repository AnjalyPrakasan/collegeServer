const mongoose = require('mongoose')
const main = require('./database')

main().catch(err => console.log(err))

//schema
const teacherSchema = new mongoose.Schema(
    {
        tname : {type:String},
        temail : {type: String},
        department : {type: String},
        tclg : {type:String}
    }
)

//model
const teacherModel = new mongoose.model('teacher_tbl',teacherSchema)

module.exports = {teacherModel}