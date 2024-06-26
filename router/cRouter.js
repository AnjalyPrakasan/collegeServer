const express = require('express')
const router = express.Router()

//import ctrl page
const { addCollege,fetchClgData,addTeacher,viewTeacher } = require('../control/cCtrl')

router.route('/addCollege').post(addCollege)
router.route('/fetchClgData').get(fetchClgData)
router.route('/addTeacher').post(addTeacher)
router.route('/viewTeacher').get(viewTeacher)


module.exports = router

