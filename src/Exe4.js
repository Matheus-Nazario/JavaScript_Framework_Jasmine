/**
 * Recebe um vetor de números e retorna o menor elemento do vetor. 
 * Se o vetor estiver vazio, retorna undefined.
 * @param {Array} vetor 
 * @return {Number} o menor valor.
 */
function acharMenor(vetor) {

    var menor = vetor[0]
    if (vetor == []) {
        return undefined
    } else {

        for (var i = 0; i <= vetor.length; i++) {

            if (vetor[i] < menor) {
                menor = vetor[i]
            }
        }


    }
    return menor
}

/**
 * Recebe um vetor de números e devolve um outro vetor apenas com os números pares deste vetor.
 * Se o vetor estiver vazio, devolve um vetor vazio.
 * @param {Array} vetor com números inteiros.
 * @returns {Array} vetor contendo apenas números pares do original (ou vazio se não houver nenhum)
 */
function acharPares(vetor) {
    let numerosPares = []

    for (let i = 0; i <= vetor.length; i++) {

        if (vetor[i] % 2 == 0) {
            numerosPares.push(vetor[i])
        }

    }
    return numerosPares
}