const { Router } = require('express')
const {
  addProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  apiProduct
} = require('../controllers/product.controllers')

const router = Router()

router.post('/', addProduct)
router.get('/fetch/:code', apiProduct)
router.get('/', getAllProducts)
router.get('/:id', getProduct)
router.patch('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router
