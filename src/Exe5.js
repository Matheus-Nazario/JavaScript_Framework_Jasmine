/**
 * Escreva uma função que recebe um dicionário com os dados da pessoa, calule o IMC dela colocando o valor obtido
 * na propriedade IMC deste dicionário e retorne uma String contendo o o estado do peso dessa pessoa.
 * 
 * Fórmula do IMC massa / (altura * altura)
 * Tabela de estados do IMC:
 *  - Menor de 18.5 -> Abaixo do peso
 *  - Entre 18.5 e 24.9 -> Normal
 *  - Entre 25.0 e 29.9 -> Excesso de peso
 *  - Entre 30.0 e 34.9 -> Obesidade Leve (Grau I)
 *  - Entre 35.0 e 39.9 -> Obesidade Severa (Grau II)
 *  - Maior e igual a 40.0 -> Obesidade Mórbida (Grau III)
 * 
 * @param {Object} pessoa dicionário com dados da pesssoa
 * @param {String} pessoa.nome nome da pessoa
 * @param {Number} pessoa.peso massa da pessoa em kg, com uma casa decimal
 * @param {Number} pessoa.altura altura da pessoa em metros, com duas casas decimais
 * @returns {String} estado do peso da pessoa
 */
function calculaImcs(pessoa) {

    var formImc = (pessoa.peso / (Math.pow(pessoa.altura, 2)))


    if (formImc < 18.5) {

        var baixo = 'Abaixo do peso'
        return baixo

    } else if (formImc > 18.5 && formImc < 25) {

        var normal = "Normal"
        return normal

    } else if (formImc > 25 && formImc < 30) {

        var excesso = 'Excesso de peso'
        return excesso

    } else if (formImc > 30 && formImc < 35) {

        var obesidadeI = "Obesidade Leve (Grau I)"
        return obesidadeI

    } else if (formImc > 35.0 && formImc < 40) {

        var obesidadeII = "Obesidade Severa (Grau II)"
        return obesidadeII

    } else if (formImc > 40) {

        var obesidadeIII = 'Obesidade Mórbida (Grau III)'
        return obesidadeIII
    }

}