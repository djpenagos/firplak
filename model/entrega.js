module.exports={
    obtener:function (conexion,funcion){
        conexion.query("SELECT * FROM entregas", funcion);
    },
    insertar:function (conexion,datos,archivos,funcion){
        conexion.query("INSERT INTO entregas (titulo, descripcion, foto) VALUES (?,?,?)",[datos.titulo, datos.descripcion, archivos.filename], funcion);
    },
    retornarDatosID:function(conexion,id,funcion) {
        conexion.query("SELECT * FROM entregas WHERE id = ?",[id],funcion);
    },
    borrar:function (conexion,id,funcion) {
        conexion.query("DELETE FROM entregas WHERE id = ?",[id],funcion);        
    },
    actualizar:function (conexion, datos, funcion) {
        conexion.query("UPDATE entregas SET titulo = ? descripcion = ? where id = ?",[datos.titulo, datos.descripcion, datos.id], funcion);
    },
    actualizarArchivo:function (conexion, datos, archivo, funcion) {
        conexion.query("UPDATE entregas SET foto = ? WHERE id = ?",[archivo.filename, datos.id], funcion);
    }
}