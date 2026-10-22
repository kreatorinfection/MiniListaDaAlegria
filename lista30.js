// EXERCICIO 1
// let idade = 17;

// if(idade >= 18){
//     console.log("vc é de maior");
// }else{
//     console.log("vc é de menor");
// }


// EXERCICIO 2
// let numero = -8;

// if(numero > 0){
//     console.log("seu numero é positivo");
// }else if(numero < 0){
//     console.log("numero negativo");
// }else{
//     console.log("seu numero é zero");
// }

// EXERCICIO 3
// let numero = 23;

// if(numero % 2 === 0){
//     console.log("o numero é par");
// }else{
//     console.log("o numero e impar");
// }

// EXERCICIO 4

// let a = 35;
// let b = 42;

// if(a > b){
//     console.log(`o numero ${a} é maior que o numero ${b}`);
// }else if(a < b){
//     console.log(`o numero ${b} é maior que o numero ${a}`);
// }else{
//     console.log("os numeros são iguais");
// }

// EXERCICIO 5

// let idade = 20;
// let ingressoValido = true;

// if(idade >= 18 && ingressoValido){
//     console.log("voce pode entrar");
// }else{
//     console.log("voce nao pode entrar");
// }

// EXERCICIO 6:

// let valorCompra = 150;
// let clienteVip = true;

// if(valorCompra >= 200 || clienteVip){
//     let desconto = valorCompra * 0.20;
//     let valorFinal = valorCompra - desconto;

//     console.log(`o valor final da compra é ${valorFinal.toFixed(2)}`);
// }else{
//     console.log(`o valor final da compra é ${valorCompra.toFixed(2)}`);
// }

// EXERCICIO 7

// let temperatura = 85;

// if(temperatura < 40){
//     console.log("temperatura baixa");
// }else if(temperatura < 80){
//     console.log("temperatura normal");

// }else{
//     console.log("superaquencimento");
// }

// ex8:

// let nota = 8;
// let frequencia = 80;

// if(nota >= 7 && frequencia >= 75){
//     console.log("aprovado");
// }else{
//     console.log("reprovado");
// }

// ex9:

// let idade = 17;
// if(idade <= 12){
//     console.log("criança");
// }else if(idade <= 17){
//     console.log("adolescente");
// }else if(idade <= 59){
//     console.log("adulto");
// }else{
//     console.log("idoso");
// }

// ex10:

// let horario = 19;
// let autorizado = true;

// if(horario >= 8 && horario <= 18 && autorizado){
//     console.log("acesso autorizado");
// }else{
//     console.log("acesso recusado");
// }

// EXERCICO 11

// let renda = 4500;
// let possuiRestricao = false;

// if(renda >= 3000 && !possuiRestricao){
//     console.log("aprovado")
// }else{
//     console.log("negado")
// }

// EXERCICIO 12
// let totalCompra = 180;
// let cupomFrete = true;
// let frete = 25;

// if(totalCompra >= 250 || cupomFrete === true){
//     frete = 0;
    
// }

// let total = totalCompra + frete;
// console.log("total a pagar R$ " + total)

// exercicio 13

// let pontos = 750;
// if(pontos < 100){
//     console.log("iniciante");
// }else if(pontos < 499){
//     console.log("bronze");
// }else if(pontos < 999){
//     console.log("prata");  
// }else{
//     console.log("ouro");
// }

// ex 14

// let usuario = "aluno";
// let senha = "senai123";

// if(usuario === "aluno" && senha === "senai123"){
//     console.log("aprovado");
// }
// else{
//     console.log("senha incorreta ou usuario errado");
// }

// ex 15
// let cor = "amarelo";

// if(cor === "amarelo"){
// console.log("atencao");
// }else if(cor === "verde"){
//     console.log("siga");
// }else if(cor === "vermelho"){
//     console.log("pare");
// }else{
//     console.log("cor invalida");
// }

// ex16
// let dia = 0;

// if(dia < 1 || dia > 7){
//     console.log("dia invalido");
// }else if(dia <= 5){
//     console.log("dia util");
// }else if(dia < 7){
//     console.log("final de semana");
// }

// ex17:

// let idade = 22;
// let possuiCNH = false;

// if(idade >= 18 && possuiCNH === true){
//     console.log("vc pode dirigir");
// }else if(idade < 18 && possuiCNH === true){
// console.log("voce nao possui idade o suficiente. E como você tirou a carteira sendo menor de idd??")
// }else if(idade > 18 && possuiCNH === false){
//     console.log("falta CNH");
// }else{
//     console.log("você é de menor e falta a cnh");
// }

// ex18:
// let estoque = 4;
// let quantidadePedida = 4;

// if(quantidadePedida <= 0){
//     console.log("pedido invalido, precisa ser maior que zero");
// }else if (quantidadePedida <= estoque){
//     estoque -= quantidadePedida
//     console.log("pedido autorizado. Novo estoque:" + estoque);
// }else{
//     console.log("pedido nao autorizado, pedido maior que o estoque atual;")
// }

// ex19:
// let nota = 5.8;
// let frequencia = 82;

// if(nota >= 7 && frequencia >75){
//     console.log("aprovado");
// }else if(nota <= 7 && frequencia >75){
//     console.log("reprovado por nota");
// }else if(nota >= 7 && frequencia <75){
//     console.log("reprovado por falta");
// }else{
//     console.log("reprovado");
// }

// ex20
// let valorCompra = 380; 

// if (valorCompra < 100) {
//     console.log(`sem desconto. R$ ${valorCompra.toFixed(2)}`);
// } else if (valorCompra < 300) {
//     let porcentual = 0.05; 
//     let valorFinal = valorCompra - (valorCompra * porcentual); 
//     console.log("desconto de 5%:", valorFinal.toFixed(2)); 
// } else if (valorCompra < 500) {
//     let porcentual = 0.10;
//     let valorFinal = valorCompra - (valorCompra * porcentual);
//     console.log("desconto de 10%:", valorFinal.toFixed(2));
// } else if (valorCompra >= 500) {
//     let porcentual = 0.15;
//     let valorFinal = valorCompra - (valorCompra * porcentual);
//     console.log("desconto de 15%:", valorFinal.toFixed(2));
// }

// exercicio 21
// let ladoA = 3;
// let ladoB = 4;
// let ladoC = 5;

// if (ladoA > 0 && ladoB > 0 && ladoC > 0 && (ladoA + ladoB > ladoC) && (ladoA + ladoC > ladoB) && (ladoB + ladoC > ladoA)) {
//     console.log("triangulo valido");
// } else {
//     console.log("triangulo invalido");
// }

// EXERCICIO 22
// let ladoA = 6;
// let ladoB = 6;
// let ladoC = 4;

// let valido = (ladoA > 0 && ladoB > 0 && ladoC > 0) &&(ladoA + ladoB > ladoC) && (ladoA + ladoC > ladoB) && (ladoB + ladoC > ladoA);

// if (!valido) {
//   console.log("nao forma um triangulo");
// } else if (ladoA === ladoB && ladoB === ladoC) {
//   console.log("equilatero");
// } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
//   console.log("isosceles");
// } else {
//   console.log("escaleno");
// }

// ex23
// let peso = 23;
// let altura = 1.75;
// let imc;

//   imc = peso/(altura**2)

// if(imc < 18.5 && peso > 0 && altura > 0){
    
//     console.log(`abaixo do peso. IMC: ${imc.toFixed(2)}`);
// }else if (imc < 25 && peso > 0 && altura > 0){
//    console.log(`normal. IMC: ${imc.toFixed(2)}`) 
// }else if (imc < 30 && peso > 0 && altura > 0){
  
//    console.log(`sobrepeso. IMC: ${imc.toFixed(2)}`) 
// }else if (imc >= 30 && peso > 0 && altura > 0){
 
//    console.log(`obeso. IMC: ${imc.toFixed(2)}`); 
// }else{
//     console.log("erro");
// }

// ex24
// let horas = 5;
// let clienteConveniado = true;

// if (horas <= 0){
//     console.log("quantidade de horas invalidas")
// }else{
//     let valorTotal = 0;
// }
// if(horas <= 2){
//     valorTotal = 10;
// }else{
//     valorTotal = 10 + (horas -2)*4;
// }
// if(clienteConveniado){
//     valorTotal = valorTotal * 0.8;
// }
// console.log(`valor final R$ ${valorTotal.toFixed(2)}`);

// ex25
// let velocidade = 92;
// let limite = 80;

// let limiteVinte = limite * 1.20;

// if(velocidade <= limite){
//     console.log("dentro do limite");
// }else if(limiteVinte <= limite){
//     consoloe.log("acima do limite");
// }else if(velocidade <= 0){
//     console.log("parado ou dando ré");
// }else{
//     console.log("muita acima do limite");
// }

// ex26

// let media = 9.1;
// let frequencia = 92;
// let rendaFamiliar = 2400;

// if(media <= 9 && frequencia >= 90 && rendaFamiliar <= 2500){
//     console.log("bolsa integral");
// }else if(media >= 7 && frequencia >= 75 && rendaFamiliar <= 4000){
//     console.log("renda familiar");
// }else{
//     console.log("sem bolsa");
// }

// ex27

// let usuario = "admin";
// let senha = "1234";
// let tentativas = 2;

// if(tentativas >= 3){
//     console.log("conta bloqueada");
// }else if(usuario === "admin" && senha === "1234"){
//     console.log("logado");
// }else{
//     console.log("credencias invalidas");
// }

// ex28

// let consumoKWh = 250;

// let tarifa = 0;

// if (consumoKWh < 0) {
//     console.log("o consumo nao pode ser negativo");
// } else {
   
//     if (consumoKWh <= 100) {
//         tarifa = 0.60;
//     } else if (consumoKWh <= 200) {
//         tarifa = 0.75;
//     } else {
//         tarifa = 0.90;
//     }

//     let conta = consumoKWh * tarifa;
//     console.log(`consumo: ${consumoKWh} kWh  tarifa aplicada: R$ ${tarifa.toFixed(2)}  conta final: R$ ${conta.toFixed(2)}`);
// }

    // ex29

//    let estoque = 12; 
// let quantidade = 3; 
// let precoUnitario = 80; 
// let saldoCliente = 220; 
// let clienteVIP = false; 

// let subtotal = quantidade * precoUnitario;
// let valorFinal;

// if (clienteVIP) {
//     valorFinal = subtotal * 0.90; 
// } else {
//     valorFinal = subtotal;
// }


// if (quantidade <= 0) {
//     console.log("compra rejeitada a quantidade solicitada deve ser maior que zero");
// } else if (quantidade > estoque) {
//     console.log("compra rejeitada: quantidade solicitada é maior do que o estoque disponivel");
// } else if (saldoCliente < valorFinal) {
//     console.log("compra rejeitada: saldo insuficiente para realizar o pagamento");
// } else {
//     console.log("compra aprovada com sucesso");
 
//     estoque = estoque - quantidade;
//     saldoCliente = saldoCliente - valorFinal;
// }
// console.log("estoque final", estoque);
// console.log("saldo final do cliente", saldoCliente);


// ex30:

let idade = 17;
let notaProva = 82;
let frequencia = 88;
let autorizacaoResponsavel = true;
let possuiPendencia = false;


let idadeValida = idade >= 14 && idade <= 20;
let notaValida = notaProva >= 70;
let frequenciaValida = frequencia >= 80;
let semPendencia = !possuiPendencia; 
let autorizacaoValida = idade >= 18 || autorizacaoResponsavel;


if (idadeValida && notaValida && frequenciaValida && semPendencia && autorizacaoValida) {
    console.log("inscrição aprovada");
} 

else if (!idadeValida) {
    console.log("inscrição recusada: idade fora da faixa permitida (14 a 20 anos)");
} else if (!notaValida) {
    console.log("inscrição recusada: nota da prova abaixo do mínimo (70)");
} else if (!frequenciaValida) {
    console.log("inscrição recusada:frequencia abaixo do mínimo (80%)");
} else if (!semPendencia) {
    console.log("inscrição recusada: o candidato possui pendências");
} else if (!autorizacaoValida) {
    console.log("inscrição recusada:menor de 18 anos precisa de autorização dos responsáveis");
}
