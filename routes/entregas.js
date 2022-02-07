var express = require('express');
var router = express.Router();
const entregaControllers = require('../controllers/entregaControllers');

var multer = require('multer');
var fecha = Date.now();

var rutaAlmacen = multer.diskStorage(
    {
        destination:function (request,file,callback){
            callback(null,'./public/images/');
        },
        filename:function (request,file,callback){
            console.log(file);
            callback(null,fecha+"_"+file.originalname);
        }
    }
);

var cargar = multer({storage:rutaAlmacen});

/* GET home page. */
router.get('/', entregaControllers.index);
router.get('/crear', entregaControllers.crear);
router.post("/", cargar.single("archivo"),entregaControllers.guardar);
router.post("/eliminar/:id",entregaControllers.eliminar);
router.get("/editar/:id",entregaControllers.editar);
router.post("/actualizar", cargar.single("archivo"),entregaControllers.actualizar);

module.exports = router;
 