export default function sumResult() {
    let indice = 13;
    let soma = 0;
    let k = 0;

    while (k < indice) {
        k = k + 1;
        soma = soma + k;
    }
    document.getElementById('sumResult').innerHTML = soma;
}