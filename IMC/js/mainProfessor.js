const calcImcBtnField = document.querySelector('#calc-imc-btn')
const alturaField = document.querySelector('input[name=altura]')
const pesoField = document.querySelector('input[name=peso]')
const warningField = document.querySelector('#warning')
const imcField = document.querySelector('#imc')
const transitionTime = 400 // tempo (em ms) para transicionar as cores

function bmiResult(peso, altura, sexo) {
    //calcula o imc
    const imc = peso / altura ** 2

    // Caso seja mulher
    if (sexo === 'feminino')
        // Retorna a condição baseado no IMC para mulheres
        if (imc < 19.1) return 'Abaixo do Peso'
        else if (imc < 25.8) return 'Peso Normal'
        else if (imc < 27.3) return 'Marginalmente Acima do Peso'
        else if (imc < 32.3) return 'Acima do Peso Ideal'
        else return 'Obeso'
    
    // Caso seja homem
    else
        // Retorna a condição baseado no IMC para mulheres
        if (imc < 20.7) return 'Abaixo do Peso'
        else if (imc < 26.4) return 'Peso Normal'
        else if (imc < 27.8) return 'Marginalmente Acima do Peso'
        else if (imc < 31.1) return 'Acima do Peso Ideal'
        else return 'Obeso'
}

// Verfica se os valores informados são validos
function validValues(altura, peso) {
    return !(
        isNaN(altura) // Caso a altura não seja numero
        || altura == 0 // Caso a altura seja 0
        || isNaN(peso) // Caso o peso não seja numero
        || peso == 0) // Caso o peso seja 0
}

function calculadoraDeIMC() {
    // Substitui as vírgulas por pontos
    let altura = alturaField.value.replace(',', '.')
    let peso = pesoField.value.replace(',', '.')

    // Atribui a uma variável o valor selecionado no html
    let sexo = document.querySelector('input[name=sexo]:checked').value
    let resultado = ''

    // Caso seja válido
    if (validValues(altura, peso)) {
        // Calcula o resultado
        resultado = bmiResult(peso, altura, sexo)

        // Esconde o aviso
        hideWarningMessage()

        // Mostra a borda de acordo com o resultado
        showBorder(resultado)
    } else {
        // Caso tenha dado errado um aviso é mostrado e a borda é escondida
        showWarningMessage()
        hideBorder()
    }

    // Mostra em tela o resultado
    imcField.value = resultado
}

// Objeto com as classes associadas ao resultado do IMC
const border = {
    'Abaixo do Peso': 'border border-warning bg-warning text-white',
    'Peso Normal': 'border border-sucess bg-success text-white',
    'Marginalmente Acima do Peso':
        'border border-warning bg-warning text-white',
    'Acima do Peso Ideal': 'border border-warning bg-warning text-white',
    'Obeso': 'border border-danger bg-danger text-white',
}

// Mostra a borda em tela
function showBorder(resultado) {
    // Usa o setTimeOut para atrasar a exibição ds cores
    setTimeout(function () {
        // Atualiza o classname com base no resultado
        imcField.className = `form-control form-control-lg ${border[resultado]}`
    }, transitionTime)
}

// Esconde a borda
function hideBorder() {
    setTimeout(function () {
        imcField.className = 'form-control form-control-lg'
    }, transitionTime)
}

// div de aviso
const warningMessage = `<div class="alert alert-warning" role="alert">
      <strong>Informe o peso e a altura corretamente.</strong>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>`

// Mostra o aviso em tela
function showWarningMessage() {
    warningField.innerHTML = warningMessage
}


// Esconde o aviso
function hideWarningMessage() {
    warningField.innerHTML = ''
    imcField.className = 'form-control form-control-lg text-black'
}

// Cria os listeners
calcImcBtnField.addEventListener('click', function (event) {
    event.preventDefault()
    calculadoraDeIMC()
})

document.body.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        event.preventDefault()
        calculadoraDeIMC()
    }
})
