let vitorias = "52";

let rank;

if (vitorias <= 10) {
    rank = "Ferro";
}
else if (vitorias > 10 && vitorias <= 20) {
    rank = "Bronze";
}
else if (vitorias >= 21 && vitorias <= 50) {
    rank = "Prata";
}
else if (vitorias > 50 && vitorias <= 80) {
    rank = "Ouro";
}
else if (vitorias > 80 && vitorias <= 90) {
    rank = "Diamante";
}
else if (vitorias > 90 && vitorias <= 100) {
    rank = "Lendário"
}
else {
    rank = "Imortal";
}

console.log(`O Herói tem de saldo de ${vitorias} está no nivel de ${rank}`);
