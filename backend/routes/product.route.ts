import express, { Router } from 'express';
import { Request, Response } from 'express';
import ProductController from '../controllers/ProductController';

const router: Router = express.Router();
const productController: any = new ProductController();

router.get("/:id", productController.getProduct);
router.post("/:id", productController.saveProduct);
router.delete("/product/:id", productController.deleteProduct);

export default router;