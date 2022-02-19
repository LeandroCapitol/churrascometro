let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calculando(){
    console.log("calculando...");

    let adultos= inputAdultos. value;
    let criancas= inputCriancas. value;
    let duracao = inputDuracao. value;
    
    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalbebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalbebida / 2000)} Garrafas de bebida</p>`

    

}

function carnePP(duracao){
    let carne= 400
    if (duracao>= 6){
        return 650;
    } else{
        return 400;
    }

}
function cervejaPP(duracao){
    if (duracao>= 6){
        return 2000;
    } else{
        return 1200;
    }

}
function bebidaPP(duracao){
    if (duracao>= 6){
        return 1500;
    } else{
        return 1000;
    }

}