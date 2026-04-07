const express = require('express');
const router = express.Router();
const pasienController = require('../controllers/pasienController');

router.get('/', pasienController.getAll);
router.get('/:id', pasienController.getById);
router.post('/', pasienController.create);
router.put('/:id', pasienController.update);
router.delete('/:id', pasienController.delete);

module.exports = router;