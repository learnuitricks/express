var express = require('express');
var tileRouter = express.Router();
    tileRouter.get('/tiles', function(req, res, next) {
    res.render('tiles', { title: 'tiles ', tiles:[
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
  
  module.exports = tileRouter;