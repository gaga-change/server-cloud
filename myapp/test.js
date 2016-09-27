/**
 * Created by qingyun on 16/9/25.
 */

var express = require('express')
var morgan = require('morgan')

var app = express()

app.use(morgan('dev'))

app.get('/', function (req, res) {
    res.send('hello, world!')
})
app.listen(9999,function () {
    console.log("http://localhost:9999");
});