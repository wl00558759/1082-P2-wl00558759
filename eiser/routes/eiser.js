var express = require('express');
var router = express.Router();

const eiserController = require('../controllers/eiserController');

const classdemoControler = require('../controllers/classdemoController');

router.get('/featured', eiserController.getFeatured);
router.get('/new', eiserController.getNew);
router.get('/combined', eiserController.getCombined);

router.get('/classdemo', classdemoControler.getAll);

router.get('/classdemo', (req, res) => {
  res.render('classdemo', { title: '108-2 Class demo' });
});

module.exports = router;
