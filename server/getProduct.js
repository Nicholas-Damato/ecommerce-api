const products = require('../products.json')

const getProduct = (req, res) => {
    const foundIndex = products.findIndex(product => product.id === +req.params.id)
    res.status(200).send(products[foundIndex])
}

module.exports = getProduct