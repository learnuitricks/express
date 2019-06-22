const express = require('express');
const registerRouter = express.Router();
function router(User){
//Register form
registerRouter.get('/', function (req, res) {
    res.render('register');
});

registerRouter.post('/', function (req, res) {
  new User({
      username:req.body.username,
      fname:req.body.fname,
      lname:req.body.lname,
      email:req.body.email,
      password:req.body.password
  }).save(function(err,doc){
      if(err)
      res.json(err);
      else
      res.send('success');
  })
});
return registerRouter;
}
module.exports = router;