const express = require('express')
const router = express.Router()

const detailController= require('../controllers/DetailController')

router.get("/:id",detailController.getDetail)
router.post("/:id",detailController.saveDetail)
router.delete("/product/:id",detailController.deleteProduct)

module.exports=router;