const { Router } = require('express');

const shortenedUrlController = require('../controllers/shortenedUrl');

const router = Router();

router.post('/', shortenedUrlController.create);

router.get('/:id', shortenedUrlController.getInfo);

module.exports = router;
