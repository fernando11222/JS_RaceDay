let raceNumber = Math.floor(Math.random() * 1000);

let horario = false
let idade = 16

if (idade > 18 && horario){
    raceNumber += 1000
}
if (idade > 18 && horario){
    console.log("correrão às 9h30.")
}
if (idade > 18 && !horario){
    console.log("correrão às 11h00.")
}
if (idade < 18){
    console.log("correrão as 12h30")
}