/**
 * Created by jundong on 16/10/18.
 */
// 'use strict';

var express = require('express');
var fs = require('fs');
var router = express.Router();
var http = require('http');
router.get('/', function (req, res, next) {
    console.log("-------------");
    res.send('hello world !');
});
router.post('/jsonp', function (req, res, next) {
    var myUrl = req.body.url;
    res.set({
        'Access-Control-Allow-Origin': '*'
    });
    http.get(myUrl, function (response) {
        response.setEncoding('utf8');
        var data = "";
        response.on('data', function (result) {
            data += result;
        });
        response.on('end', function () {
            res.send({data: data});
        });
    });
});
router.get('/getImg.webp', function (req, res, next) {
    var url = 'http://s.cimg.163.com/pi/cms-bucket.nosdn.127.net/0f4f98340d524d4982d2b3dedfdf247820161101101251.jpeg.270x2147483647.75.auto.webp';
    // url = "http://s0.hao123img.com/res/img/logo/logonew.png";
    res.set({
        'Access-Control-Allow-Origin': '*',
        'content-type' : 'application/x-wb1'
    });
    http.get(url, function (response) {
        response.setEncoding('binary');
        var data = "";
        response.on('data', function (result) {
            data += result;
        });
        response.on('end', function () {
            // res.send(data);
            // console.log(__dirname)
            // fs.writeFile(__dirname + "/logonew.webp", data, "binary", function(err){
            //     if(err){
            //         console.log("down fail");
            //     }
            //     console.log("down success");
            // });
            console.log('ok');
            res.send(data);
        });
    });
// res.send('gaga')
});

module.exports = router;
