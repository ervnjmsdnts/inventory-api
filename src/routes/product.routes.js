const { Router } = require('express')
const {
  addProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/product.controllers')

const router = Router()

router.post('/:code', addProduct)
router.get('/', getAllProducts)
router.get('/:id', getProduct)
router.patch('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router
