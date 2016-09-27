var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log(req.cookies);
    res.render('index.html', {title: 'Express'});
});

router.post('/test', function (req, res, next) {
    
});

module.exports = router;
