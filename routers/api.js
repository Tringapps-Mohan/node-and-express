const router = require('express').Router();
const { getProducts } = require('../controllers/api.js');
router.route('/').get(getProducts);

module.exports = {
  router,
};
