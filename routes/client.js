
const { join } = require('path')
const router = require('express').Router()

router.get('/*', (req, res) => {
  res.sendFile(__dirname+"/client/build/index.html")
})
module.exports= router;