/* Aluno: Bruno Ouriques Meifert */

console.log(`\nOlá! Selecione uma opção abaixo, que deseja saber informações do que significa na metodologia ágil:\n\n1 - Planning\n2 - Sprint\n3 - Retro\nX - Encerrar\n`);
let numero = 0;
function pergunta(numero){
    if(numero === 1){
        console.log(`\n1- Planning: É uma cerimônia simples dentro do processo ágil Scrum, que possibilita perceber a realidade e avaliar caminhos.\n`);
    }else if(numero === 2){
        console.log(`\n2- Sprint: É uma reunião de pessoas envolvidas em um projeto para promover um desenvolvimento.\n`);
    }else if(numero === 3){
        console.log(`\n3- Retro: É relembrar ou rever eventos que passaram, em forma de uma análise.\n`);
    }else if(numero === `x`){
    }else{
        console.log(`\nComando inválido, reinicie o programa!`);
    }
}

/*
Como usar o programa.
Altere o valor dentro dos parenteses de "pergunta(x)"
Obs: Altere no código abaixo.
*/

pergunta(1);