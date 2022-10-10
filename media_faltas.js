function btnmostrar(){
    let notas4 = parseFloat(document.getElementById("nota1").value);
    let notas5 = parseFloat(document.getElementById("nota2").value);
    let notas6 = parseFloat(document.getElementById("nota3").value);

    let pessoa = document.getElementById("nome").value;
    limit1 = 0;
    limit = 10;
    if (notas4 < 0 | notas5 < 0 | notas6 < 0) {
        document.getElementById("outAprovacao").innerHTML += "Alguma informação está errada!!" + "</br>";
    }

    else if (notas4 <= limit && notas5 <= limit && notas6 <= limit){
        let media = (notas4 + notas5 + notas6) / 3;
        if (media >= 6 && media < 10){
            document.querySelector("pre").innerHTML += pessoa + " você tem a média "+ media + " e foi Aprovado" + "</br>";
        }
        if (media < 6){
            document.querySelector("pre").innerHTML += pessoa + " você tem a média "+ media + " e foi reprovado" + "</br>";
        }
        if (media == 10) {
            document.querySelector("pre").innerHTML += pessoa + " você tem a média " + media + " e foi Aprovado com distinção" + "</br>";
        }
    
    }
}

function btnmostrar2() {
    let faltas = parseInt(document.getElementById("falta").value);
    let aulas = parseInt(document.getElementById("aula").value);

    let limite = (aulas / 100) * 25;
    if (faltas < 0 | aulas < 0) {
        document.getElementById("outFaltas").innerHTML += "Alguma informação está errada!!" + "</br>";
    }
    else if (faltas >= limite) {
        document.getElementById("outFaltas").innerHTML += "O limite de faltas é " + limite + "</br>" + "Você foi reprovado por faltas" + "</br>";
    }
    else if (faltas < limite) {
        document.getElementById("outFaltas").innerHTML += "O limite de faltas é " + limite + "</br>" + "Você nao excedeu o limite de faltas! Parabéns" + "</br>";
    }
}