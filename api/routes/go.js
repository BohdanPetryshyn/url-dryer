const { Router } = require('express');

const goController = require('../controllers/go');

const router = Router();

router.get('/:originalUrlId', goController.redirect);

module.exports = router;
