const List = require("../models/listModel");

const pool = require("../db");

class ListController {
  saveList = async (req, res) => {  
    try {
      const newData = req.body;
      const query =
        "INSERT INTO public.receipt (organize,dept,date,number,deliver_name,warehouse_name,location,maker_name,owner_warehouse_name,account_name) VALUES ($1, $2, $3,$4,$5,$6,$7,$8,$9,$10)";
      const values = [
        newData.organize,
        newData.dept,
        newData.date,
        newData.number,
        newData.deliverName,
        newData.warehouseName,
        newData.location,
        newData.makerName,
        newData.ownerWarehouseName,
        newData.accountName,
      ];
      await pool.query(query, values);

      const newList = await pool.query('SELECT * FROM public.receipt')
      res.status(200).json(newList.rows)
    } catch (err) {
      console.log(err.message);
      res.status(501).json({ message: err.message });
    }
  };

  getList = async (req, res) => {
    try {
      const list =  await pool.query('SELECT * FROM public.receipt')
      res.status(200).json(list.rows);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: err.message });
    }
  };

  deleteReceipt = async (req, res) => {
    try {
      const {id} = req.params
      await pool.query(`DELETE FROM public.receipt WHERE id=${id}`);
      await pool.query(`DELETE FROM public.product WHERE receipt_id=${id}`);
      const list =  await pool.query('SELECT * FROM public.receipt')
      res.status(200).json(list.rows);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: err.message });
    }
  };
}

module.exports = new ListController();
