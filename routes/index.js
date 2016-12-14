var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('book/index', {title: 'Express'});
});

router.post('/test', function (req, res, next) {
    res.send('gaga');
});

module.exports = router;
