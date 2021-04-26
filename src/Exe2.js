/**
 * Recebe uma string com o nome completo de uma pessoa (primeiro e último nome apenas) 
 * e devolve o nome com o sobrenome abreviado. Caso só o primeiro nome seja passado, não faça nada.
 * Exemplos:
 *  - Yuri Dirickson -> Yuri D.
 *  - João Silva -> João S.
 *  - Maria -> Maria
 * 
 * @param {String} nomeCompleto nome completo da pessoa.
 * @return string com o segundo nome abreviado
 */
function abreviadorNomes(nomeCompleto) {

    let namesList = nomeCompleto.split(" ")

    let varificadorNome = namesList.length
    if (varificadorNome == 1) {

        return nomeCompleto

    } else {

        /* bloco para acessar o primeiro nome */
        var primeiroNome = namesList[0]

        /* bloco para acessar o último nome */

        var ultimoNome = namesList[namesList.length - 1]
        var ultimoNome = ultimoNome.split("")
        var ultimoNomeAbrev = ultimoNome[0] + "."

        var nomeCople = primeiroNome + " " + ultimoNomeAbrev

        return nomeCople
    }
}

/**
 * Escreva uma função que recebe uma String com a data no formato brasileiro (dia/mês/ano) e
 * converta para o formato: 'Dia de Mês Extenso de Ano'. 
 * Exemplos:
 *  - 10/11/2019 -> 10 de Novembro de 2019
 *  - 03/02/2000 -> 03 de Fevereiro de 2000
 * OBS: Note a letra maiúscula do mês.
 * OBS2: Se a data estiver sem conteúdo deve devolver null
 * 
 * @param {String} data 
 * @returns {String} data no formato 
 */
function converteDataParaFormaCompleta(data) {

    let sepData = data.split("/")

    let dia = sepData[0]
    let mesKey = sepData[1]
    let ano = sepData[2]


    var semConteudo = (data == "" || data == undefined)
    var semDia = (dia == "" || dia == undefined)
    var semmes = (mesKey == "" || mesKey == undefined)
    var semAno = (ano == "" || mesKey == undefined)


    if (semDia || semmes || semAno || semConteudo == true) {

        return null

    } else {

        let meses = {

            "01": "Janeiro",
            "02": "Fevereiro",
            "03": "Março",
            "04": "Abril",
            "05": "Maio",
            "06": "Junho",
            "07": "Julho",
            "08": "Agosto",
            "09": "Setembro",
            "10": "Outubro",
            "11": "Novembro",
            "12": "Dezembro"

        }

        let nomeMes = meses[mesKey]
        var dataCompleta = dia + " de " + nomeMes + " de " + ano

        return dataCompleta
    }
}