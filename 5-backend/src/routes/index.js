const express = require('express');
const { append } = require('express/lib/response');
const accountAbsController = require('../controllers/account-abstraction.js');
const advsController = require('../controllers/advertisement.js')
const router = express.Router();
router.get('/welcome', (req, res) => {
  res.status(200).send({ data: 'welcome' });
});

router.post('/abstraction/create-account', accountAbsController.createAccount);
router.post('/advertisement/view-ad', advsController.viewUserAd);
router.post('/advertisement/skip-ad',advsController.skipAd);
router.post('/advertisement/view-ad-platform',advsController.viewAdPlatform)

module.exports = router;