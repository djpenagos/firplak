var conexion = require('../config/conexion');
var entrega = require("../model/entrega");
var borrar = require("fs");

module.exports={
    
    index:function(req,res){
        entrega.obtener(conexion,function(err,datos){
           console.log(datos); 
           res.render('entrega/index', { title: 'FIRPLAK', entregas:datos });

        });
    },
    crear:function(req,res){
        res.render('entrega/crear')
    },
    guardar:function(req,res){
        console.log(req.body);
        console.log(req.file.filename);
        entrega.insertar(conexion,req.body,req.file,function(err){            
             res.redirect('/entregas'); 
        });
    },
    eliminar:function(req,res){
        console.log("Recepción de datos");
        console.log(req.params.id);
        entrega.retornarDatosID(conexion,req.params.id,function (err, registros){
            var nombreImagen = "public/images/"+(registros[0].foto);            

            if(borrar.existsSync(nombreImagen)){
                borrar.unlinkSync(nombreImagen);
            }

            entrega.borrar(conexion,req.params.id,function (err) {
                res.redirect('/entregas');
            });
        });

    },
    editar:function (req,res) {
        
        entrega.retornarDatosID(conexion,req.params.id,function (err, registros){
            console.log(registros[0]);
            res.render('entrega/editar', {entrega:registros[0]});

        });        
    },
    actualizar:function (req,res) {
        console.log(req.body.titulo);
        console.log(req.body.descripcion);

        //entrega.actualizar(conexion,req.body,function (err) { });
        
        
        if(req.file){
            if(req.file.filename){
                
                entrega.actualizarArchivo(conexion,req.body,req.file,function (err) {})

                
                
            }
        }
        res.redirect("/entregas");
    }
}