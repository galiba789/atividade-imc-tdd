function imc(peso, altura) {
    var result = peso / (altura*altura)
    result = parseFloat(result.toFixed(1))
    if (result < 0) {
       console.log('se ta morto')
       return result
    }
    else if (result < 18.5) {
       console.log('voce esta desnutrido') 
       return result
    }
    else if (result <= 25) {
        console.log('voce esta com o peso baixo')
        return result
    }
    else if (result <= 30) {
        console.log('voce esta com o peso normal')
        return result
    }
    else if (result > 30) {
        console.log('voce esta acima do peso')
        return result
    }

}

module.exports = imc
