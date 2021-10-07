const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/courseController.js');

// router.get('/:create', courseController.create);
router.get('/:slug', courseController.show);

module.exports = router;