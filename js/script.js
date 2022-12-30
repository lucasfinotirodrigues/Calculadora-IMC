const calcular = document.getElementById('calcular');

function imc () {
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso, procure um(a) profissional!';
        }else if (valorIMC < 25) {
            classificacao = 'com o peso ideal, parabéns!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso, atenção!';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I, cuidado procure um(a) profissional!';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II, cuidado procure um(a) profissional!';
        }else {
            classificacao = 'com obesidade grau III, cuidado procure um(a) profissional!';
        }

        resultado.textContent = `Seu IMC é ${valorIMC} e você está ${classificacao}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);