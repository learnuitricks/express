var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tiles', function(req, res, next) {
  res.render('tiles', { title: 'this is tiles page', tiles:[
    {
     image:"tile1.jpg",
      name:"kajaria",
      model:"nit-01",
      price :200,
      rating:4,
      status:1
    },
 {
      image:"tile2.jpg",
      name:"johnson",
      model:"nit-02",
      price :100,
      rating:4,
      status:0
    }] });
 });
 

module.exports = router;
