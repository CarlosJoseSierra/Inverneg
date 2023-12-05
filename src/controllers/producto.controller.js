import { getConnection, querys, sql } from "../database";

export const getProductos = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllProductos);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const createNewProducto = async (req, res) => {
  const { PROD_codigo, PROD_codigoExt, PROD_descripcion,PROD_TP_id,PROD_stockFijo,PROD_costoFijo,
    PROD_totalFijo, PROD_stockReal,PROD_costoReal,PROD_totalReal,PROD_INV_id,PROD_BOD_id,PROD_linea,
    PROD_USU_ing} = req.body;

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("PROD_codigo", sql.VarChar, PROD_codigo)
      .input("PROD_codigoExt", sql.VarChar, PROD_codigoExt)
      .input("PROD_descripcion", sql.Decimal, PROD_descripcion)
      .input("PROD_TP_id", sql.Decimal, PROD_TP_id)
      .input("PROD_stockFijo", sql.Decimal, PROD_stockFijo)
      .input("PROD_costoFijo", sql.Decimal, PROD_costoFijo)
      .input("PROD_totalFijo", sql.Decimal, PROD_totalFijo)
      .input("PROD_stockReal", sql.Decimal, PROD_stockReal)
      .input("PROD_costoReal", sql.Decimal, PROD_costoReal)
      .input("PROD_totalReal", sql.Decimal, PROD_totalReal)
      .input("PROD_INV_id", sql.Decimal, PROD_INV_id)
      .input("PROD_USU_ing",sql.Decimal,PROD_USU_ing)
      .input("PROD_BOD_id", sql.Decimal, PROD_BOD_id)
      .input("PROD_linea", sql.Decimal, PROD_linea)
      .query(querys.addNewProducto);
      if(result.rowsAffected[0]==1){
        return res.status(200).json({ status: "ok", msg: "Registro exitoso" ,token:0,PROD_id:result.recordset[0].PROD_id});
      }else{
        return res.status(400).json({ status: "400", msg: "No se pudo registrar, consulte al administrador" ,token:0,PROD_id:0});
      }
    
  } catch (error) {
    res.status(500);
    console.log(error.message);
    res.send(error.message);
  }
};

export const updateProductoById = async (req, res) => {
    //const { BOD_descripcion, BOD_direccion, BOD_SUC_id,BOD_USU_edit} = req.body;
  
    //// validating
    //if (BOD_descripcion == null || BOD_direccion == null ||  BOD_SUC_id==null || BOD_USU_edit == null) {
      //return res.status(400).json({ msg: "Favor ingresar Datos Requeridos" });
   // }

  //try {
    ////console.log('no se conecto');
    //const pool = await getConnection();
    
    //const result = await pool
      //.request()
      //.input("id", req.params.id)
      //.input("BOD_descripcion", sql.VarChar, BOD_descripcion)
      //.input("BOD_direccion", sql.VarChar, BOD_direccion)
      //.input("BOD_SUC_id", sql.Decimal, BOD_SUC_id)
      //.input("BOD_USU_edit", sql.Decimal, BOD_USU_edit)
      //.query(querys.updateProductoById);

   //if(result.rowsAffected==1){
    //return res.status(200).json({ status: "ok", msg: "Actualizacion exitosa" ,token:0});
  //}else{
    //return res.status(400).json({ status: "400", msg: "No se pudo actualizar, consulte al administrador" ,token:0});
  //}
  //} catch (error) {
    //  res.status(500);
     // res.send(error.message);
 // }
};

export const getProductoById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getProductoById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateProductoBodegaById = async (req, res) => {
    const { PROD_INV_id,PROD_USU_edit} = req.body;
  
    // validating
    if (PROD_INV_id == null ||  PROD_USU_edit==null) {
      return res.status(400).json({ msg: "Favor ingresar Datos Requeridos" });
    }

  try {
    //console.log('no se conecto');
    const pool = await getConnection();
    
    const result = await pool
      .request()
      .input("id", req.params.id)
      .input("PROD_INV_id", sql.VarChar, PROD_INV_id)
      .input("PROD_USU_edit", sql.Decimal, PROD_USU_edit)
      .query(querys.updateProductoBodegaById);

   if(result.rowsAffected>=1){
    return res.status(200).json({ status: "ok", msg: "Actualizacion exitosa" ,token:0});
  }else{
    return res.status(400).json({ status: "400", msg: "No se pudo actualizar, consulte al administrador" ,token:0});
  }
  } catch (error) {
      res.status(500);
      res.send(error.message);
  }
};


