
"use strict";
const axios = require('axios');
const cron = require('node-cron');
const Time = require('../database/model/time')

const urlEndpoint = 'https://services.swpc.noaa.gov/json/rtsw/rtsw_mag_1m.json'



const getTime = async(req, res) => {

  try {
    const times = await Time.find()

    
    res.json({
      ok: true,
      msg: 'Efficient challenge!',
      times: times[0].times
    })
  } catch (error) {
    console.log(error);
    return error
  }

}



const  postTime = async (req, res) => {

  try {
    const response = await axios.get(urlEndpoint);
    await Time.deleteMany()

    let times = []
    times.push(response.data)
    const time = new Time({
      times: times[0]
    })

    await time.save()

    return res.send({
      ok: true,
      msg: 'data is ready updated'
    })

  } catch (error) {
    console.log(error);
    return error
  }

}


const  deleteTime = async (req, res) => {

  try {

    await Time.deleteMany()

    let times = []
    times.push([])
    const time = new Time({
      times: 'Database is empty.'
    })

    await time.save()

    return res.send({
      ok: true,
      msg: 'Database is empty.'
    })

  } catch (error) {
    console.log(error);
    return error
  }

}



module.exports = {
  getTime,
  postTime,
  deleteTime
};

