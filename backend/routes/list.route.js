const express = require('express')
const router = express.Router()

const listController= require('../controllers/ListController')

router.get("/",listController.getList)
router.post("/",listController.saveList)
router.delete("/:id",listController.deleteReceipt)

module.exports=router;