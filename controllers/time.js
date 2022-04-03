
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

    
  } catch (error) {
    console.log(error);
    return error
  }

}

cron.schedule('*/5 * * * *', async () => {
  console.log('running a task every 5 minute */5 * * * *');
  postTime()
});




module.exports = {
  getTime,
  postTime
};

