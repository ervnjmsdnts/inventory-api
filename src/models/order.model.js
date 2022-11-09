const { model, Schema } = require('mongoose')

const orderSchema = new Schema(
  {
    products: [{ type: Schema.ObjectId, ref: 'Product', required: true }],
    total: { type: Number, required: true }
  },
  {
    timestamps: true
  }
)

module.exports = model('Order', orderSchema)
