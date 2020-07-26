function verificar() {
    var tvm = window.document.getElementById("vm")
    var tva = window.document.getElementById("va")
    var res = window.document.getElementById("res")

    if ((tvm.value.length == 0) || (tva.value.length == 0))  {
        res.innerHTML = `Por favor preencha os campos !`
        
        
    } else {
        var mas = Number(tvm.value)
        var alt = Number(tva.value)
        var imc = mas / (alt^2)

        if (imc < 17){
            resp = "Você esta muito abaixo do peso !"
        } else if (imc <= 18.5) {
            resp = "Você esta abaixo do Peso !"
        } else if (imc <= 25) {
            resp = "Você esta no Peso Ideal, Párabens !"
        } else if (imc <= 30) {
           resp = "Você esta com Sobrepeso, precisa malhar um pouco !"
        } else if (imc <= 35) {
            resp = "Você esta com obesidade ! Cuidado !"
        } else if (imc <= 40) {
            resp = "Você esta com obesidade severa ! Melhor visitar um médico !"
        } else if (imc > 40) {
            resp = "Você esta com obesidade morbida ! Procure um Médico !"
        }
        res.innerHTML = `Com um peso de ${mas} e uma alura de ${alt} seu IMC é ${imc.toFixed(2)} e ${resp}.`
    }

    
}