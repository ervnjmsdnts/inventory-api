const Product = require('../models/product.model')
const axios = require('axios').default

module.exports.getAllProducts = async (_req, res) => {
  const products = await Product.find({ isActive: true })

  return res.json(products)
}

module.exports.getProduct = async (req, res) => {
  const product = await Product.findOne({ id: req.params.id })
  return res.json(product)
}

module.exports.apiProduct = async (req, res) => {
  const response = await axios.get(
    `https://go-upc.com/api/v1/code/${req.params.code}`,
    {
      headers: {
        Authorization:
          'Bearer f79dee7ab1a2f6ff8d2bd0d1098c82f17156909891eac92d7dcad98bd73dc4f1'
      }
    }
  )

  const {
    code,
    product: { name, imageUrl }
  } = response.data

  const productExist = await Product.findOne({ barcode: code, isActive: true })

  if (productExist) {
    return res.status(400).send({ message: 'Product already in inventory' })
  }

  return res.status(200).send({ code, name, imageUrl })
}

module.exports.addProduct = async (req, res) => {
  const product = new Product({ ...req.body })

  await product.save()

  return res.status(200).send({ message: 'Product saved' })
}

module.exports.updateProduct = async (req, res) => {
  const product = await Product.findOneAndUpdate(
    { _id: req.params.id },
    { ...req.body }
  )

  if (!product) return res.status(400).send({ message: 'Product not found' })

  await product.save()

  return res.status(200).send({ message: 'Product updated' })
}

module.exports.deleteProduct = async (req, res) => {
  const productExist = await Product.findOne({
    _id: req.params.id,
    isActive: true
  })

  if (!productExist)
    return res.status(400).send({ message: 'Product not found' })

  productExist.isActive = false

  await productExist.save()

  return res.status(200).send({ message: 'Product deleted' })
}
