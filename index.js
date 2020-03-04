const express = require('express');

let rotaUsuario = require('./routes/usuarioRoute');

let rotaCardapio = require('./routes/cardapioRoute');

let app = express();

app.get('/',(req,res)=>res.send('Hello there!'));

app.get('/cardapio',(req,res)=>res.send('Many options, many choices, much wow!'));

app.use('/usuario', rotaUsuario);

app.use('/cardapio', rotaCardapio);

app.listen(3000,()=>console.log("Server is up!"));
