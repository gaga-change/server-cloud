var express = require('express');  //获取express框架
var path = require('path');  //nodejs path对象
var favicon = require('serve-favicon'); //处理图标
var logger = require('morgan'); //显示请求
var cookieParser = require('cookie-parser'); //coolie 的解析
var bodyParser = require('body-parser'); //post请求体的解析
var ejs = require('ejs');

var routes = require('./routes/index');  //获取routes
var users = require('./routes/users');  //获取users


var app = express(); //获取Application对象

// view engine setup
app.set('views', path.join(__dirname, 'views'));  //设置views的路径
app.engine('.html',ejs.renderFile); // 配置模板
app.set('view engine', 'jade');  //设置模板

app.use(favicon(__dirname + '/public/images/favicon.ico')); //配置网站的图标的位置

// ::1 - - [25/Sep/2016:08:52:55 +0000] "GET / HTTP/1.1" 304 - "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36"
//::1 - - [25/Sep/2016:08:50:51 +0000] "GET / HTTP/1.1" 304 - "-" "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.76 Mobile Safari/537.36"
// app.use(logger('combined'));
//::1 - - [25/Sep/2016:08:52:04 +0000] "GET / HTTP/1.1" 304 -
// app.use(logger('common'));

// Sun, 25 Sep 2016 09:07:50 GMT morgan deprecated default format: use combined format at ../app.js:27:9
//::1 - - [Sun, 25 Sep 2016 09:07:51 GMT] "GET / HTTP/1.1" 304 - "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36"
// app.use(logger('default'));
// ::1 - GET / HTTP/1.1 304 - - 10.397 ms
// app.use(logger('short'));
// GET / 304 - - 10.260 ms
app.use(logger('tiny')); //输出请求信息
// GET / 304 11.555 ms - -
// app.use(logger('dev'));

app.use(bodyParser.json()); //解析请求体的json
app.use(bodyParser.urlencoded({ extended: false })); //解决请求体的编码问题
app.use(cookieParser());  //解析cookie
app.use(express.static(path.join(__dirname, 'public'))); //配置静态文件路径

app.use('/', routes);  //使用routes
app.use('/users', users);  //使用users

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  //轮到这里了，说明没有请求
  var err = new Error('Not Found');
  err.status = 404;
  next(err); //设置一个404 传给下个处理
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  //如果程序崩溃了，临死前报下错  500 
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {   //返回一个错误html
      message: err.message,  
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  //普通的err ， 返回 错误HTML；
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
