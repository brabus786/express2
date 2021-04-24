const express = require('express');
const got = require('got');
const { query, validationResult } = require('express-validator');
var router = express.Router();
require('dotenv').config();


/* GET users listing. */
router.get('/', async (req, res, next) => {
  const { lat, lon } = req.query;

  console.log(process.env.API_KEY, 'KEY');
  
  try {
    const response = await got('http://api.openweathermap.org/data/2.5/weather', {
      searchParams: {
        lat,
        lon,
        appid: process.env.API_KEY ,
      }
    })
    console.log(response);
    const { name, sys: { country }, wind: { speed } } = JSON.parse(response.body);
    res.json({ country, name, speed });
  } catch (e) {
    next(e)
  }
});

module.exports = router;
