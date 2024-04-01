const imc = require('./imc')

test ('teste de imc', function() {
    expect(imc(50,1.90)).toBe(13.9)
})
