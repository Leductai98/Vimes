import { Request, Response } from "express";
import { Pool } from "pg";
import pool from "../db";
import Receipt from "../model/Receipt";
import Product from "../model/Product";

class ReceiptController {
  saveReceipt = async (req: Request, res: Response): Promise<void> => {
    try {
      const newData: any = req.body;
      await Receipt.create({
        organize: newData.organize,
        dept: newData.dept,
        date: newData.date,
        number: newData.number,
        deliver_name: newData.deliverName,
        warehouse_name: newData.warehouseName,
        location: newData.location,
        maker_name: newData.makerName,
        owner_warehouse_name: newData.ownerWarehouseName,
        account_name: newData.accountName,
      });
      const allReceipts = await Receipt.findAll();
      res.status(200).json(allReceipts);
    } catch (err: any) {
      console.log(err.message);
      res.status(501).json({ message: err.message });
    }
  };

  getReceipt = async (req: Request, res: Response): Promise<void> => {
    try {
      const allReceipts = await Receipt.findAll();
      res.status(200).json(allReceipts);
    } catch (err: any) {
      console.log(err.message);
      res.status(500).json({ message: err.message });
    }
  };

  deleteReceipt = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const receiptToDelete = await Receipt.findOne({
        where: {
          id: id,
        },
      });
      if (receiptToDelete) {
        await receiptToDelete.destroy();
        await Product.destroy({
          where: {
            receipt_id: id
          }
        });
      }
      const allReceipts = await Receipt.findAll();
      res.status(200).json(allReceipts);
    } catch (err: any) {
      console.log(err.message);
      res.status(500).json({ message: err.message });
    }
  };
}

export default ReceiptController;
