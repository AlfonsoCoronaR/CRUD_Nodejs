module.exports={
    obtener:function(conexion,funcion) {
        conexion.query('select * from libros', funcion);
    },
    insertar:function(conexion, datos, archivos, funcion) {
        conexion.query('insert into libros (nombre, imagen) values(?,?)',[datos.nombre, archivos.filename], funcion)
    },
    retornarDatosId:function (conexion, id, funcion) {
        conexion.query('select * from libros where id = ?',[id], funcion);
    },
    borrar:function (conexion, id, funcion) {
        conexion.query('delete from libros where id=?', [id], funcion)
    },
    actualizar:function(conexion, datos, funcion) {
        conexion.query('update libros set nombre=? where id=?', [datos.nombre, datos.id], funcion)
    },
    actualizarArchivo:function(conexion, datos,archivo, funcion) {
        conexion.query('update libros set imagen=? where id=?', [archivo.filename, datos.id], funcion)
    }
}