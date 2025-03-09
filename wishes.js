const express = require('express');
const router = express.Router();
const WishesController = require('../controllers/wishesController');

const wishesController = new WishesController();

// Route to create a new wish
router.post('/create', (req, res) => {
    wishesController.createWish(req, res);
});

// Route to get all wishes
router.get('/', (req, res) => {
    wishesController.getWishes(req, res);
});

// Route to publish a wish
router.post('/publish', (req, res) => {
    wishesController.publishWish(req, res);
});

module.exports = router;