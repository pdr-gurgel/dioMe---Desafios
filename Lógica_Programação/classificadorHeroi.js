let caracter = {
    Nome: "Joaquim",
    XP: 5820
}

function exibirRank(nome, rank) {
    console.log("O herói de nome:", nome, "está no nível de:", rank)
}

function calcularRank(XP) {
    if (XP < 1000) { return "ferro" }
    else if (XP > 1000 && XP <= 2000) { return "bronze" }
    else if (XP > 2000 && XP <= 5000) { return "prata" }
    else if (XP > 5000 && XP <= 7000) { return "ouro" }
    else if (XP > 7000 && XP <= 8000) { return "platina" }
    else if (XP > 8000 && XP <= 9000) { return "ascendente" }
    else if (XP > 9000 && XP <= 10000) { return "imortal" }
    else { return "radiante" }
}

function main(nome, xp) {
    let rank = calcularRank(xp)

    exibirRank(nome, rank)
}

main(caracter.Nome, caracter.XP)