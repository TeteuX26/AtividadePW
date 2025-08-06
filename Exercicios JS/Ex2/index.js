function displayNum() {
    const input = prompt("Digite um número:");
    const verification = document.getElementById("verification");
    const num = Number(input);

    if (input === '' || isNaN(num)) {
        verification.textContent = `Por favor, insira um número válido.`;
        return;
    }

    if (num % 2 === 0) {
        verification.textContent = `O número ${num} é Par.`

    }else{
        verification.textContent = `O número ${num} é Ímpar.`

    }
} window.onload = displayNum
