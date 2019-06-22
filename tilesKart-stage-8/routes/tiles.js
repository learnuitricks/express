var express = require('express');
function router(Tile) {
 var tileRouter = express.Router();
 tileRouter.get('/tiles', function (req, res, next) {
   const { query } = req;
   Tile.find(query, (err, tiles) => {
     if (err) {
       return res.send(err);
     }
     res.render('tiles', { title: 'tiles', tiles: tiles });
   });
 });
 return tileRouter;
}
module.exports = router;


