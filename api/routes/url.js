const { Router } = require('express');

const { createUrl } = require('../controllers/url');

const router = Router();

router.post('/', createUrl);

module.exports = router;
