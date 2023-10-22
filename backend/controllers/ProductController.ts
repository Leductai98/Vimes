import { Request, Response } from 'express';
import Product from '../model/Product';
import Receipt from '../model/Receipt';

class ProductController {
  getProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      const id: string = req.params.id;
      const allReceipts = await Receipt.findOne({
        where:{
          id:id
        }
      });
      const productsOfReceipt = await Product.findAll({
        where:{
          receipt_id:id
        }
      })

      const data = {
        receipt: allReceipts,
        products: productsOfReceipt,
      };
      res.status(200).json(data);
    } catch (err:any) {
      console.log(err.message);
      res.status(500).json({ message: err.message });
    }
  };

  saveProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      const newData = req.body;
      await Product.create({
        receipt_id:newData.receiptId,
        name:newData.name,
        unit:newData.unit,
        count:newData.count,
        real_count:newData.realCount,
        price:newData.price,
        code_number:newData.codeNumber,
      });
    
    const productsOfReceipt = await Product.findAll({
      where:{
        receipt_id:newData.receiptId,
      }
    })
      res.status(200).json(productsOfReceipt);
    } catch (err:any) {
      console.log(err.message);
      res.status(500).json({ message: err.message });
    }
  };

  deleteProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      const id: string = req.params.id;
      const productToDelete = await Product.findOne({
        where: {
          id: id,
        },
      });
      if (productToDelete) {
        await productToDelete.destroy();
      }
      res.status(200).json({ message:'success' });
    } catch (err:any) {
      console.log(err.message);
      res.status(500).json({ message: err.message });
    }
  };
}

export default ProductController;