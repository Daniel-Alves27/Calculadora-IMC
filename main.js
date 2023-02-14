let botaoCalcular = document.getElementById("botao_calcular");
const abaixoDoPeso = 18.5;
const pesoIdeal = 24.9;
const acimaDoPeso = 29.9;
const grau1 = 34.9;
const grau2 = 39.9;
const grau3 = 40;

botaoCalcular.addEventListener("click", () => {
    let nome = document.getElementById("nome").value;
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let resultado = document.getElementById("resultado");
    let alturaAoQuadrado = parseFloat(altura*altura).toFixed(2);
    let imc = (parseFloat(peso / alturaAoQuadrado).toFixed(2));

    if(imc <= abaixoDoPeso ){
        resultado.innerHTML = `${nome} seu IMC é ${imc}, você está abaixo do peso.`;
    }else if(imc <= pesoIdeal){
        resultado.innerHTML = `${nome} seu IMC é ${imc},Peso ideal (parabéns)`;
    }else if(imc <= acimaDoPeso){
        resultado.innerHTML = `${nome} seu IMC é ${imc},levemente acima do peso.`;
    }else if(imc <= grau1){
        resultado.innerHTML = `${nome} seu IMC é ${imc},obesidade grau 1`
    }else if(imc <= grau2){
        resultado.innerHTML = `${nome} seu IMC é ${imc},obesidade grau 2 (severa)`
    }else if(imc >= grau3){
        resultado.innerHTML = `${nome} seu IMC é ${imc},obesidade 3 (mórbida)`
    }else{
        resultado.innerHTML = "Erro no calculo, tente novamente!"
    }
})
