/**
 * Created by jundong on 16/10/18.
 */
// 'use strict';

var express = require('express');
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
    console.log(myUrl);
    http.get(myUrl, function (response) {
        response.setEncoding('utf8');
        var data = "";
        response.on('data', function (result) {
            data += result;
        });
        response.on('end', function () {
            // console.log(data);
            res.send({data: data});
        });
    });
});

module.exports = router;
