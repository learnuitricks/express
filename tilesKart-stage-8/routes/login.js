var express = require('express');

/* GET home page. */
function router(User){
  var loginRouter=express.Router();
  loginRouter.get('/', function(req, res, next) {
  res.render('login', { title: 'tilesKart' });
});

return loginRouter ;
}

module.exports = router;
