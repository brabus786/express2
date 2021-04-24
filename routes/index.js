const express = require('express');
const router = express.Router();
const weatherRouter = require('./weather');
const {articles} = require('../data/data.json') 


router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express 2' });
});

router.get('/blog', (req, res, next) => {
  res.render('blog', { title: 'Blog', articles });
});

router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Contact' });
});

router.post('/contact', (req, res, next) => {
  console.log(req.body);
  res.render('contact', { title: 'Contact' });
});

router.use('/weather', weatherRouter);

module.exports = router;
