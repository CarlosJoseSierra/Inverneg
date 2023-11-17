import { getConnection, querys, sql } from "../database";

export const getBodegas = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllBodegas);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const createNewBodega = async (req, res) => {
  const { BOD_descripcion, BOD_direccion, BOD_SUC_id,BOD_USU_ing} = req.body;
  
  // validating
  if (BOD_descripcion == null || BOD_direccion == null ||  BOD_SUC_id==null || BOD_USU_ing == null) {
    return res.status(400).json({ msg: "Favor ingresar Datos Requeridos" });
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("BOD_descripcion", sql.VarChar, BOD_descripcion)
      .input("BOD_direccion", sql.VarChar, BOD_direccion)
      .input("BOD_SUC_id", sql.Decimal, BOD_SUC_id)
      .input("BOD_USU_ing", sql.Decimal, BOD_USU_ing)
      .query(querys.addNewBodega);
      if(result.rowsAffected==1){
        return res.status(200).json({ status: "ok", msg: "Registro exitoso" ,token:0});
      }else{
        return res.status(400).json({ status: "400", msg: "No se pudo registrar, consulte al administrador" ,token:0});
      }
    
  } catch (error) {
    res.status(500);
    console.log(error.message);
    res.send(error.message);
  }
};

export const updateBodegaById = async (req, res) => {
    const { BOD_descripcion, BOD_direccion, BOD_SUC_id,BOD_USU_ing} = req.body;
  
    // validating
    if (BOD_descripcion == null || BOD_direccion == null ||  BOD_SUC_id==null || BOD_USU_ing == null) {
      return res.status(400).json({ msg: "Favor ingresar Datos Requeridos" });
    }

  try {
    //console.log('no se conecto');
    const pool = await getConnection();
    
    const result = await pool
      .request()
      .input("id", req.params.id)
      .input("BOD_descripcion", sql.VarChar, BOD_descripcion)
      .input("BOD_direccion", sql.VarChar, BOD_direccion)
      .input("BOD_SUC_id", sql.Decimal, BOD_SUC_id)
      .input("BOD_USU_ing", sql.Decimal, BOD_USU_ing)
      .query(querys.updateBodegaById);

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

export const getBodegaById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getBodegaById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};



