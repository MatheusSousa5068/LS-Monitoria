const calcImcBtnField = document.querySelector('#calc-imc-btn')
const alturaField = document.querySelector('input[name=altura]')
const pesoField = document.querySelector('input[name=peso]')
const warningField = document.querySelector('#warning')
const imcField = document.querySelector('#imc')

let peso = 35
let cond

function calcIMC(peso, altura) {
    return peso / (altura ** 2)
}

function calcCondHomem(imc) {
    switch (true) {
        case imc <= 20.7:
            cond = 'Abaixo do peso'
            break

        case imc > 20.7 && imc <= 26.4:
            cond = 'Peso normal'
            break

        case imc > 26.4 && imc <= 27.8:
            cond = 'Marginalmente Acima do peso'
            break

        case imc > 27.8 && imc <= 31.1:
            cond = 'Acima do peso Ideal'
            break

        case imc > 31.1:
            cond = 'Obeso'
            break

        default:
            cond = 'Inválido'
    }

    return cond
}

function calcCondMulher(imc) {
    switch (true) {
        case imc < 19.1:
            cond = 'Abaixo do peso'
            break

        case imc > 19.1 && imc <= 25.8:
            cond = 'Peso normal'
            break

        case imc > 25.8 && imc <= 27.3:
            cond = 'Marginalmente Acima do peso'
            break

        case imc > 27.3 && imc <= 32.3:
            cond = 'Acima do peso Ideal'
            break

        case imc > 32.3:
            cond = 'Obeso'
            break

        default:
            cond = 'Inválido'
    }

    return cond
}

function main() {
    let altura = alturaField.value.replace(',', '.')
    let peso = pesoField.value.replace(',', '.')
    let sexo = document.querySelector('input[name=sexo]:checked').value

    let cond
    let imc = calcIMC(peso, altura)

    if (sexo == 'masculino') {
        cond = calcCondHomem(imc)
    } else if (sexo == 'feminino') {
        cond = calcCondMulher(imc)
    }

    imcField.value = cond
}

calcImcBtnField.addEventListener('click', function(event) {
    event.preventDefault()
    main()
  })
  
  document.body.addEventListener('keydown', function(event) {
    if(event.key == "Enter"){
      event.preventDefault()
      main()
    }
  })