const express = require ("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require('body-parser');
const Pagamento = require('./models/Pagamento');

app.engine('handlebars', handlebars({defaultlayout: 'main'}))
app.set('view engine', 'handlebars')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) 
// parse application/json
app.use(bodyParser.json())

//Rota Listar Pagamento
app.get('/pagamento', function(req, res){
  Pagamento.findAll().then(function(pagamentos){
    res.render('pagamento', {pagamentos: pagamentos});
  });
});

//Rota Pagamento
app.get('/cad-pagamento', function(req, res){
  res.render('cad-pagamento')
});

//Rota para receber os dados do formulário
app.post('/add-pagamento', function(req, res){  
  Pagamento.create({
    nome: req.body.nome,
    valor: req.body.valor
  }).then(function(){
    res.redirect('/pagamento')
    //res.send("Pagamentos cadastrar com sucesso!");
  }).catch(function(erro){
    res.send("Erro: Pagamento não foi cadastrado com sucesso!" + erro);
  })
  //res.send("Nome: " + req.body.nome + "<br>Valor: " + req.body.valor + "<br>")
})

//SERVIDOR - Porta 8081
app.listen(8081);