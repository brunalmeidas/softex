function calculadora(n1, n2, operador) {
    let resultado;

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
            resultado = n1 / n2;
            break;
        default:
            resultado = "Operador inválido!"
    }

    console.log("Resultado: ", resultado)
}


calculadora(10, 2, '*');