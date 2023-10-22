import express, { Router } from 'express';
import { Request, Response } from 'express';
import ReceiptController from '../controllers/ReceiptController';

const router: Router = express.Router();
const receiptController: any = new ReceiptController();

router.get("/", (req: Request, res: Response) => {
  receiptController.getReceipt(req, res);
});

router.post("/", (req: Request, res: Response) => {
  receiptController.saveReceipt(req, res);
});

router.delete("/:id", (req: Request, res: Response) => {
  receiptController.deleteReceipt(req, res);
});

export default router;