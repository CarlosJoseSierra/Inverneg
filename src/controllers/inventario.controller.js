import { getConnection, querys, sql } from "../database";

export const getInventory = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllInventory);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const getInventoryById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getInventoryById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewInventory = async (req, res) => {
  const { INV_descripcion, INV_BOD_id,INV_USU_ing} = req.body;
  
  // validating
  if (INV_descripcion == null || INV_USU_ing == null) {
    return res.status(400).json({ msg: "Favor ingresar Datos Requeridos" });
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("INV_descripcion", sql.VarChar, INV_descripcion)
      .input("INV_BOD_id", sql.VarChar, INV_BOD_id)
      .input("INV_USU_ing", sql.VarChar, INV_USU_ing)
      .query(querys.addNewInventario);
      if(result.rowsAffected[0]==1){
        return res.status(200).json({ status: "ok", msg: "Registro exitoso" ,token:0,INV_id:result.recordset[0].INV_id,INV_BOD_id:INV_BOD_id});
      }else{
        return res.status(400).json({ status: "400", msg: "No se pudo registrar, consulte al administrador" ,token:0});
      }
    
  } catch (error) {
    res.status(500);
    console.log(error.message);
    res.send(error.message);
  }
};


export const getInventoryActive = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getInventoryByActive);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
    console.log(error.message);
  }
};

export const EndInventoryById = async (req, res) => {
  const { INV_USU_edit} = req.body;
try {
  //console.log('no se conecto');
  const pool = await getConnection();
  
  const result = await pool
    .request()
    .input("id", req.params.id)
    .input("INV_USU_edit", sql.Decimal, INV_USU_edit)
    .query(querys.EndInventoryById);

 if(result.rowsAffected==1){
  return res.status(200).json({ status: "ok", msg: "Actualizacion exitosa" ,token:0});
}else{
  return res.status(400).json({ status: "400", msg: "No se pudo actualizar, consulte al administrador" ,token:0});
}
} catch (error) {
    res.status(500);
    res.send(error.message);
}
};



