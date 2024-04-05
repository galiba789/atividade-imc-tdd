// module.exports = function() {}
// module.exports = function() {return 50}
function imc (peso, altura) {
    if (isNaN(peso) || isNaN(altura)){
        return("valor invalido, digite seu peso e altura")
    } else if (peso <= 0 || altura <= 0){
        return ("valor invalido, digite seu peso e altura")
    } else if (peso >= 200 || altura >= 3)
        return ("valor invalido, digite seu peso e altura")
    else{
        return Number((peso/(altura*altura)).toFixed(1))
    }

}
const message = imc => {
    if (imc < 18.5) {
        return (`seu imc está abaixo do peso ideal`)
    } else if (imc >= 18.6 && imc < 24.9) {
        return (`seu imc está no peso ideal`)
    } else if (imc > 25 && imc < 29.9){
        return(`seu imc está um pouco acima do peso ideal`)
    } else if (imc > 30 && imc <35.9) {
        return (`seu imc está acima do peso ideal`)
    } else if (imc > 36 && imc < 40) {
        return (`seu imc está bastante acima do peso ideal`)
    }
}



module.exports = {imc, message}
