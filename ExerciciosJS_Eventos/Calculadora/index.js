function calcular(operador) {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    let resultado = 0;

    switch (operador) {
        case '+':
            resultado = n1 + n2;
            break;
        case '-':
            resultado = n1 - n2;
            break;
        case '*':
            resultado = n1 * n2;
            break;
        case '/':
            resultado = n2 !== 0 ? n1 / n2 : 'Erro (Divisão por zero)';
            break;
    }
    document.getElementById("resultado").textContent = `O resultado é ${resultado}`;
}