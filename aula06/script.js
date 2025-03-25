let hey = document.getElementById("hey").innerHTML;
console.log(hey);

document.getElementById("hey").innerHTML = "ola mundo :D";

let nome = prompt("qual é o seu nome?");
let idade = prompt("qual é a sua idade?");
let ano_atual = 2025;
let ano_nascimento = ano_atual - idade

let resposta = "oi " + nome + ", seu ano de nascimeto é " + ano_nascimento + " :3";
document.getElementById("age").innerHTML = resposta;

function mensagem(msg){
    console.log(msg)
};

mensagem("rosas são vermelhas");
mensagem("violetas são azuis");
mensagem("a cor do fundo se assemelha a hatsune miku");

function soma(a,b){
    return a + b;
}
let c = soma(7, 3);
console.log("a soma de " + 7 + " mais " + 3 + " é: " + c);

function click(){
    let num = parseInt(document.getElementById("numero").value);
    console.log("incrementos ate " + num);
    for(let i = 0; i <= num; i++){
        console.log(i);
    }
}

function ex3(){
    let num1 = parseInt(document.getElementById('ex3_1').value);
    let num2 = parseInt(document.getElementById('ex3_2').value);
    let result = soma(num1, num2);
    console.log(result);
    document.getElementById("ex3_resp").innerHTML = "a soma de " + num1 + " e " + num2 + " é " + result;
}

function ex4(){
    let numero1 = parseInt(document.getElementById('ex4_1').value);
    let numero2 = parseInt(document.getElementById('ex4_2').value);
    let result_4 = numero1 - numero2;
    console.log(result_4);
    document.getElementById("ex4_resp").innerHTML = "o produto de " + numero1 + " e " + numero2 + " é " + result_4;
}