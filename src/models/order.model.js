const { model, Schema } = require('mongoose')

const orderSchema = new Schema(
  {
    products: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true }],
    total: { type: Number, required: true }
  },
  {
    timestamps: true
  }
)

module.exports = model('Cashier', orderSchema)
