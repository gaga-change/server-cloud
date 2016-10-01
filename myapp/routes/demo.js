/**
 * Created by dong on 2016/10/1.
 */

var express = require('express');
var router = express.Router();

/**
 * 信息载入助手
 */
router.get('/message', function (req, res, next) {res.render('demo/计科1填写表格.html',{});});
router.get('/chu', function (req, res, next) {res.render('demo/chu.html',{});});

module.exports = router;