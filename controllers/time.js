
"use strict";
const axios = require('axios');
const Time = require('../database/model/time')

const getTime = async(req, res) => {

  try {
    const times = await Time.find()


    
    res.json({
      ok: true,
      msg: 'Response is ready!',
      times: times[0].times
    })
  } catch (error) {
    console.log(error);
    return error
  }

}

const urlEndpoint = 'https://services.swpc.noaa.gov/json/rtsw/rtsw_mag_1m.json'
const  postTime = async (req, res) => {

  try {
    const response = await axios.get(urlEndpoint);

    await Time.deleteMany()

    
    let times = []
    times.push(response.data)
    const time = new Time({
      times: times[0]
    })


    const newTimes = await time.save()


    res.json({
      ok: true,
      endpoint: `List wheter response in the endpoint: ${urlEndpoint}` ,
      weather: newTimes
    })
  } catch (error) {
    console.log(error);
    return error
  }

}



module.exports = {
  getTime,
  postTime
};

