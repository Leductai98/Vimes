const pool = require("../db");

class DetailController {
  getDetail = async (req, res) => {
    try {
      const id = req.params.id;
      const receipt = await pool.query(
        `SELECT * FROM public.receipt WHERE id=${id}`
      );
      const product = await pool.query(
        `SELECT * FROM public.product WHERE receipt_id=${id}`
      );
      const data = {
        receipt: receipt.rows[0],
        product: product.rows,
      };
      res.status(200).json(data);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: err.message });
    }
  };
  saveDetail = async (req, res) => {
    try {
      const newData = req.body;
      const query =
        "INSERT INTO public.product (receipt_id,name,unit,count,real_count,price,code_number) VALUES ($1, $2, $3,$4,$5,$6,$7)";
      const values = [
        newData.receiptId,
        newData.name,
        newData.unit,
        newData.count,
        newData.realCount,
        newData.price,
        newData.codeNumber,
      ];
      await pool.query(query, values);

      const newList = await pool.query(
        `SELECT * FROM public.product WHERE receipt_id=${newData.receiptId}`
      );
      res.status(200).json(newList.rows);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: err.message });
    }
  };

  deleteProduct = async (req, res) => {
    try {
      const id = req.params.id;
      const newData = req.body;
      await pool.query(`DELETE FROM public.product WHERE id=${id}`);
      //   res.status(200).json(newList.rows);
      res.send('success');
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: err.message });
    }
  };
}

module.exports = new DetailController();
