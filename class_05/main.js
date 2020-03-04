//Select Dom Elements
var resultEl = document.getElementById('result'),
    lengthEl = document.getElementById('length'),
    upperEl = document.getElementById('uppercase'),
    lowerEl = document.getElementById('lowercase'),
    numberEl = document.getElementById('numbers'),
    symbolEl = document.getElementById('symbols'),
    generateEl = document.getElementById('generate'),
    clipboardEl = document.getElementById('clipboard')

var randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generateEl.addEventListener('click', function() {
    var length = +lengthEl.value,
        hasLower = lowerEl.checked,
        hasUpper = upperEl.checked,
        hasNumber = numberEl.checked,
        hasSymbol = symbolEl.checked
    resultEl.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length
    )
})

//copy password to clipboard
clipboardEl.addEventListener('click', function() {
    var textarea = document.createElement('textarea')
    var password = resultEl.innerText
    if (!password) {
        return
    }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard')
})

//generate password function
function generatePassword(lower, upper, number, symbol, length) {
    //1. init password
    //2. filter out unchecked typer
    //3.loop over the length
    //4.return final password
    var generatedPass = ''
    var typesCount = lower + upper + number + symbol

    var typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
        function(item) {
            return Object.values(item)[0]
        }
    )

    if (typesCount === 0) {
        return ''
    }
    for (var i = 0; i < length; i += typesCount) {
        typesArr.forEach(function(type) {
            var funcName = Object.keys(type)[0]
            generatedPass += randomFunc[funcName]()
        })
    }
    var finalPassword = generatedPass.slice(0, length)
    return finalPassword
}

//Generate functions
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    var symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
