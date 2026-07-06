let nome = "HEROI";
let xp  = 0;
let nivel ="";
console.log("Iniciando a jornada do herói " + nome + "...");
for (let batalha = 1; batalha <= 7; batalha += 1) {
    xp += 1200; 
    console.log("Venceu a batalha " + batalha + "! XP subiu para: " + xp);
}

console.log("Jornada concluída! Calculando a patente...");
console.log("-----------------------------------------");
if (xp<=1000) {nivel = "FERRO"}
else if (xp>=1001 && xp<=2000) {nivel="BRONZE";}
else if (xp>=2001 && xp<=5000) {nivel ="PRATA";}
else if (xp>=5001 && xp<=7000) {nivel ="OURO";}
else if (xp>=7001 && xp<=8000) {nivel = "PLATINA";}
else if (xp>=8001 && xp<=9000) {nivel = "ASCENDENTE";}
else if (xp>=9001 && xp<=10000) {nivel = "IMORTAL";}
else nivel = "RADIANTE";
console.log("O " + nome + " está no nível " + nivel)



