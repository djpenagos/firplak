var express = require('express');
const entregaControllers = require('../controllers/entregaControllers');
var router = express.Router();
 

/* GET home page. */
router.get('/', function(req,res,next){
  res.send("Bienvenido a la entrega de Pedidos")
});

module.exports = router;
