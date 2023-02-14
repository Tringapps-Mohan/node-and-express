const data = require('../data.json');
const url = require('url');
module.exports = {
  getProducts: (req, res) => {
    const { product } = req.query;
    let d = data;
    let success = true;
    if (product) {
      d = d.filter((p) => p.name === product);
      success = true;
    }
    res.send({ success, data: d });
  },
};
