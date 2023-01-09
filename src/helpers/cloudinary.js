const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: 'duhta5403',
  api_key: '257295176798872',
  api_secret: 'oUNMCyERatEowtrJpA_91oGToWY'
})

module.exports = { cloudinary }
