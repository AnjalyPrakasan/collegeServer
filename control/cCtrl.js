//importing model
const {clgModel} = require('../model/schema')
const { teacherModel } = require('../model/teacherSchema')

const addCollege = async (req,res)=>
    {
        try{
            const {name,address,location} = req.body

            //db code
            clgModel.create({
                name,address,location
            })

            console.log(name)
            res.json("College has been Registered Successfully..")
        }
        catch(err)
        {
            res.json(err.message)
        }
    }

const fetchClgData = async (req,res)=>
    {
        try{
            const record = await clgModel.find()
            if(record.length>0)
                {
                    res.json(record)
                }
            else{
                res.json([])
            }
        }
        catch{}
    }

//teacher
const addTeacher = async(req,res) =>
    {
        try{
            const {tname,temail,department,tclg} = req.body

            //db code
            teacherModel.create(
                {tname,temail,department,tclg}
            )

            console.log(tname)
            res.json('Teacher has been registered Successfully..')
        }
        catch(err)
        {
            console.log(err.message)
        }
    }

//display teacher
const viewTeacher = async(req,res) =>
    {
        try{
            const arr = await teacherModel.find()
            if(arr.length>0)
                {
                    res.json(arr)
                }
            else
            {
                res.json([])
            }
        }
        catch{}
    }

module.exports = {
    addCollege,
    fetchClgData,
    addTeacher,
    viewTeacher
}