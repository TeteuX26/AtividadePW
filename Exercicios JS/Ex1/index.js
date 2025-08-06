function displayVerification() {
    const inputNum = prompt("Por favor, insira seu ano de nascimento:");
    const verification = document.getElementById("verification");

    const anoAtual = new Date().getFullYear();
    const anoNas = Number(inputNum);

    if (inputNum && !isNaN(anoNas) && anoNas <= anoAtual) {
        const idade = anoAtual - anoNas;
        verification.textContent = `Você tem: ${idade} anos.`;

    } else {
        verification.textContent = `Informação inválida.`;
    }
} window.onload = displayVerification;