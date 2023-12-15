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

export const getDiferenciaByItem = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getDiferenciaProductById);
    return res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const updateHistorialByItem = async (req, res) => {
  const { HIST_stockReal, HIST_costoReal, HIST_USU_edit} = req.body;

  // validating
  if (HIST_stockReal == null) {
    return res.status(400).json({ msg: "Favor ingresar Datos Requeridos" });
  }

try {
  //console.log('no se conecto');
  const pool = await getConnection();
  
  const result = await pool
    .request()
    .input("id", req.params.id)
    .input("HIST_stockReal", sql.Decimal, HIST_stockReal)
    .input("HIST_costoReal", sql.Decimal, HIST_costoReal)
    .input("HIST_USU_edit", sql.Decimal, HIST_USU_edit)
    .query(querys.updateHistorialByItem);

 if(result.rowsAffected==1){
  return res.status(200).json({ status: "ok", msg: "Actualizacion exitosa" ,token:0, HIST_stockReal:HIST_stockReal,HIST_costoReal:HIST_costoReal});
}else{
  return res.status(400).json({ status: "400", msg: "No se pudo actualizar, consulte al administrador" ,token:0,HIST_stockReal:0,HIST_costoReal:0});
}
} catch (error) {
    res.status(500);
    res.send(error.message);
}
};






