const express = require('express');
const cardapioController = require('../controllers/cardapioController')
let route = express.Router();
route.get('/cadastrar/:pizza/:preco',(req,res)=>{
let {pizza} = req.params;
let {preco} = req.params;
res.send(`Sua pizza de ${pizza} foi cadastrada com sucesso com o valor de ${preco}`)});
route.get('/ver',cardapioController.listarCardapio);
module.exports = route;
