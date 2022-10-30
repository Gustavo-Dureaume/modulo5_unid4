var express = require('express');
// const { post } = require('..');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/novedades', { //es login.hbs
    layout:'admin/layout' // es layout.hbs
    persona: req.session.nombre 
  });
});

module.exports = router;