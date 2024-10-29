function Somar(num1, num2){
    return num1 + num2;
}
function Subtrair(num1, num2){
    return num1 - num2;
}   

function Multiplicar(num1, num2){
    return num1 * num2;
}

function Dividir(num1, num2){
    return num1 / num2;
}

function Calcular(fun, num1, num2){
    return fun(num1, num2);
}

document.getElementById('formsCalc').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const primeiroNum = parseFloat(document.getElementById('primeiro-numero').value);
    const segundoNum = parseFloat(document.getElementById('segundo-numero').value);
    const operacao = document.getElementById('escolhaOperacao').value;

    let resultadoOperacao;    

    switch (operacao){
        case 'Somar':
            resultadoOperacao = Calcular(Somar, primeiroNum, segundoNum);
            break;
        case 'Subtrair':
            resultadoOperacao = Calcular(Subtrair, primeiroNum, segundoNum);
            break;
        case 'Multiplicar':
            resultadoOperacao = Calcular(Multiplicar, primeiroNum, segundoNum);
            break;
        case 'Dividir':
            resultadoOperacao = Calcular(Dividir, primeiroNum, segundoNum);
            resultadoOperacao = resultadoOperacao.toFixed(2);
            break;     
    }
    document.getElementById('resultado').textContent = resultadoOperacao;
  });