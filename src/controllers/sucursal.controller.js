import { getConnection, querys, sql } from "../database";

export const getSucursales = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllSucursales);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const createNewSucursal = async (req, res) => {
  const { SUC_descripcion, SUC_direccion, SUC_UBIC_id,SUC_USU_ing} = req.body;
  
  // validating
  if (SUC_descripcion == null || SUC_direccion == null ||  SUC_UBIC_id==null || SUC_USU_ing == null) {
    return res.status(400).json({ msg: "Favor ingresar Datos Requeridos" });
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("SUC_descripcion", sql.VarChar, SUC_descripcion)
      .input("SUC_direccion", sql.VarChar, SUC_direccion)
      .input("SUC_UBIC_id", sql.Decimal, SUC_UBIC_id)
      .input("SUC_USU_ing", sql.Decimal, SUC_USU_ing)
      .query(querys.addNewSucursal);
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

export const updateSucursalById = async (req, res) => {
    const { SUC_descripcion, SUC_direccion, SUC_UBIC_id,SUC_USU_edit} = req.body;
  
  // validating
  if (SUC_descripcion == null || SUC_direccion == null ||  SUC_UBIC_id==null || SUC_USU_edit == null) {
    return res.status(400).json({ msg: "Favor ingresar Datos Requeridos" });
  }

  try {
    //console.log('no se conecto');
    const pool = await getConnection();
    
    const result = await pool
      .request()
      .input("id", req.params.id)
      .input("SUC_descripcion", sql.VarChar, SUC_descripcion)
      .input("SUC_direccion", sql.VarChar, SUC_direccion)
      .input("SUC_UBIC_id", sql.Decimal, SUC_UBIC_id)
      .input("SUC_USU_edit", sql.Decimal, SUC_USU_edit)
      .query(querys.updateSucursalById);

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

export const getSucursalById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getSucursalById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};



