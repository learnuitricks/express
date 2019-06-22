var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

const hbs = require('hbs');


const Tile = require('./public/javascripts/models/tileModel');
const User = require('./public/javascripts/models/userModel');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users')(User);
var tilesRouter = require('./routes/tiles')(Tile);
var loginRouter  = require('./routes/login')();
let registerRouter = require('./routes/register')(User);

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

// view engine setup

const db = mongoose.connect('mongodb://localhost/tilesKart');

app.set('view engine', 'hbs');
app.set('views', __dirname +'/views');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.use('/data', tilesRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login',loginRouter);
app.use('/register', registerRouter);
//bootstrap


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

