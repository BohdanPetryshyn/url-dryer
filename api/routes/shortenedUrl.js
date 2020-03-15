const { Router } = require('express');

const { create } = require('../controllers/shortenedUrl');

const router = Router();

router.post('/', create);

module.exports = router;