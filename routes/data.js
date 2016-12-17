/**
 * Created by dong on 2016/12/17.
 */
var express = require('express');
var path = require("path");
var router = express.Router();

/* GET home page. */
router.get('/type', function (req, res, next) {
    res.sendFile(path.dirname(__dirname) + "/data/type.json");
});

module.exports = router;
