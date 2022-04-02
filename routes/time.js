'use strict'

const express = require('express');
const timeController = require('../controllers/time')



let router = express.Router();
 

router.get('/time', timeController.getTime)
router.post('/time', timeController.postTime)







  






module.exports = router;