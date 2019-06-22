var express = require('express');
var userRouter = express.Router();

function router(User) {
  userRouter.post('/', function (req, res, next) {
    User.find({
      username: req.body.username,
      password: req.body.password,
    }, (err, users) => {
      if (err) {
        return res.send(err);
      }
      else if (users.length !== 0) {
        res.redirect('/data/tiles');
      }
      else {
        res.send('user does not exist');
      }
    });
  });
  return userRouter;
}
module.exports = router;
