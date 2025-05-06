require("colors");
var http = require("http");
var express = require("express");
var app = express();
app.use(express.static('./public'))
var server = http.createServer(app);
server.listen(80);
console.log('hello world'.rainbow)

let bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const uri = `mongodb+srv://gustavoyurinishi:OODrxnPyyD39Hs2V@helloworld.waodpqp.mongodb.net/?retryWrites=true&w=majority&appName=helloworld`;
const client = new MongoClient(uri, { useNewUrlParser: true });
var dbo = client.db("helloworld")
var usuarios = dbo.collection("usuarios")

app.get("/cadastrar", function(requisicao, resposta){
    let nome = requisicao.query.nome;
    let login = requisicao.query.login;
    let senha = requisicao.query.senha;
    let nasc = requisicao.query.nascimento;
})

app.post("/cadastrar", function(requisicao, resposta){
    let nome = requisicao.body.nome;
    let login = requisicao.body.login;
    let senha = requisicao.body.senha;
    let nasc = requisicao.body.nascimento;
    console.log(nome, login, senha, nasc);
    resposta.render("resposta",{nome, login, senha, nasc});

    var data = {db_nome: nome, db_login: login, db_senha: senha, db_nasc: nasc}

    usuarios.insertOne(data, function(err){
        console.log(err)
        if(err){
            resposta.render("resposta",{status: "Erro", nome, login, senha, nasc})
        }
        else{
            resposta.render("resposta",{status: "Sucesso", nome, login, senha, nasc})
        }
    })
})

app.post("/login", function(req, resp) {
    var data = {db_login: req.body.login, db_senha: req.body.senha };

usuarios.find(data).toArray(function(err, items) {
    console.log(items);
    if (items.length == 0) {
        resp.render('resposta', {resposta: "Usuário/senha não encontrado!"})
    }else if (err) {
        resp.render('resposta', {resposta: "Erro ao logar usuário!"})
    }else {
        resp.render('resposta_usuario', {resposta: "Usuário logado com sucesso!"})        
    };
    });
});

app.post("/login", function(requisicao, resposta){
    let nome = requisicao.query.nome;
    let login = requisicao.query.login;
    let senha = requisicao.query.senha;
    let nasc = requisicao.query.nascimento;
    var data = {db_nome: nome, db_login: login, db_senha: senha, db_nasc: nasc}
    usuarios.find(data).toArray(function(err, items){
        console.log(items)
        if(items.length == 0){
            resposta.render("reposta",{status: "Não encontrado"})
        }else if(err){
            resposta.render("reposta",{status: "Erro"})
        }else{
            resposta.render("reposta",{status: "Sucesso"})
        }
    })
})

app.get("/login", function(requisicao, resposta){
    let nome = requisicao.query.nome;
    let login = requisicao.query.login;
    let senha = requisicao.query.senha;
    let nasc = requisicao.query.nascimento;
    var data = {db_nome: nome, db_login: login, db_senha: senha, db_nasc: nasc}
    usuarios.find(data).toArray(function(err, items){
        console.log(items)
        if(items.length == 0){
            resposta.render("reposta",{status: "Não encontrado"})
        }else if(err){
            resposta.render("reposta",{status: "Erro"})
        }else{
            resposta.render("reposta",{status: "Sucesso"})
        }
    })
})

app.post('/atualizar_senha'), function(req, resp){
    let login = req.body.login;
    let senha = req.body.senha;
    let novasenha = req.body.novasenha;
}