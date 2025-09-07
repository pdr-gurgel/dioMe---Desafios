let vitorias = 58
let derrotas = 11

function calcularPartidas(vitorias, derrotas) {
    saldoVitorias = vitorias - derrotas

    let nivel;
    if (saldoVitorias < 10) { nivel = ferro }
    else if (saldoVitorias > 10 && saldoVitorias <= 20) { nivel = "bronze" }
    else if (saldoVitorias > 20 && saldoVitorias <= 50) { nivel = "prata" }
    else if (saldoVitorias > 50 && saldoVitorias <= 80) { nivel = "ouro" }
    else if (saldoVitorias > 80 && saldoVitorias <= 90) { nivel = "diamante" }
    else if (saldoVitorias > 90 && saldoVitorias <= 100) { nivel = "lendário" }
    else { nivel = imortal }

    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)
}

calcularPartidas(vitorias, derrotas)