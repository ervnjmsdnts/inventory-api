const Order = require('../models/order.model')

module.exports.getAllOrders = async (_req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 }).populate('products')

  return res.json(orders)
}

module.exports.addOrder = async (req, res) => {
  const order = new Order({ ...req.body })

  // Deduct amount from quantity

  await order.save()

  return res.status(200).send({ message: 'Order added' })
}
