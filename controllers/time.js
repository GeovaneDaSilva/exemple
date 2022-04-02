
"use strict";
const axios = require('axios');

function getTime(req, res) {

  try {
    res.json({
      ok: true,
      msg: 'Perfect deployment 100% work great!'
    })
  } catch (error) {
    console.log(error);
    return error
  }

}

const urlEndpoint = 'https://services.swpc.noaa.gov/json/rtsw/rtsw_mag_1m.json'
const  postTime = async (req, res) => {
  const response = await axios.get(urlEndpoint);


  try {
    res.json({
      ok: true,
      msg: 'Perfect deployment 100% work great!',
      weather: response.data
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

