var resultEl = document.getElementById('result'),
    clipboardEl = document.getElementById('clipboard'),
    lengthEl = document.getElementById('length'),
    upperEl = document.getElementById('uppercase'),
    lowerEl = document.getElementById('lowercase'),
    numbersEl = document.getElementById('numbers'),
    symbolsEl = document.getElementById('symbols')

document.getElementById('generate').addEventListener('click', function() {
    var length = +lengthEl.value || 6,
        hasUpper = upperEl.checked,
        hasLower = lowerEl.checked,
        hasNumbers = numbersEl.checked,
        hasSymbols = symbolsEl.checked
    var pass = generatePassword(
        hasUpper,
        hasLower,
        hasNumbers,
        hasSymbols,
        length
    )
    resultEl.textContent = pass
})

clipboardEl.addEventListener('click', function() {
    var textarea = document.createElement('textarea')
    var pass = resultEl.innerText
    if (!pass) {
        return
    }

    textarea.value = pass
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password coppied!')
})

//generate pass function
function generatePassword(upper, lower, number, symbol, length) {
    //int pass var
    var pass = ''
    var typesCount = upper + lower + number + symbol
    if (typesCount === 0) {
        return ''
    }
    for (var i = 0; i < length; i += typesCount) {
        if (upper) {
            pass += getRandomUpper()
        }
        if (lower) {
            pass += getRandomLower()
        }
        if (number) {
            pass += getRandomNumber()
        }
        if (symbol) {
            pass += getRandomSymbol()
        }
    }

    var finalPassword = pass.slice(0, length)
    return finalPassword
}

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
    var symbol = '!@#$%^&*()_+=-{}[]<>,./?:;'
    return symbol[Math.floor(Math.random() * symbol.length)]
}
