const { imc, message } = require("./imc")

describe('cenarios provaveis', () => {
    test('imc deve retornar uma função', function () {
        expect(imc).toBeInstanceOf(Function)
    })
    test('imc (50, 1) = 50', function () {
        expect(imc(50, 1.0)).toBe(50)
    })
    test('imc de (80, 1.75) = 26.1', function () {
        expect(imc(50, 1.75)).toBe(16.3)
    })
})

describe('cenarios improvaveis', () => {
    test('imc vazio deve retornar "valor invalido, digite seu peso e altura"', function () {
        expect(imc()).toBe("valor invalido, digite seu peso e altura")
    })
    test('imc ("a", "b") deve retornar "valor invalido, digite seu peso e altura"', function () {
        expect(imc('a', 'b')).toBe("valor invalido, digite seu peso e altura")
    })
    test('imc (0, 0) deve retornar "valor invalido, digite seu peso e altura"', function () {
        expect(imc(0, 0)).toBe("valor invalido, digite seu peso e altura")
    })
    test('imc (200, 3) deve retornar "valor invalido, digite seu peso e altura"', function () {
        expect(imc(200, 3)).toBe("valor invalido, digite seu peso e altura")
    })
})

describe('classificação', () => {
    test(`imc < 18.5 - seu imc está abaixo do peso ideal`, () => {
        expect(message(18)).toBe(`seu imc está abaixo do peso ideal`)
    })
    test(`imc >= 18.5 e 24.9 - seu imc está  no peso ideal`, () => {
        expect(message(23)).toBe(`seu imc está no peso ideal`)
    }) 
    test(`imc >= 25 e 29.9 - imc está um pouco acima do peso ideal`, () => {
        expect(message(28)).toBe(`seu imc está um pouco acima do peso ideal`)
    })
    test(`imc >= 30 e 34.9 - imc esta acima do peso ideal`, () => {
        expect(message(32)).toBe(`seu imc está acima do peso ideal`)
    })
    test(`imc >= 35 e 39.9 - imc esta bastante acima do peso ideal`, () => {
        expect(message(38)).toBe(`seu imc está bastante acima do peso ideal`)
    })
})