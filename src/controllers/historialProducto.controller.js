import { getConnection, querys, sql } from "../database";


export const getHistorialProductoByIdInventory = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getHistorialProductById);
    return res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};





