const { Router } = require('express');

const shortenedUrlController = require('../controllers/shortenedUrl');

const router = Router();

router.post('/', shortenedUrlController.create);

module.exports = router;
