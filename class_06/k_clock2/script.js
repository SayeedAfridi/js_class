var hmsEl = document.querySelector('.hms')
var dd = new Date()

var dateEl = document.querySelector('.date')

dateEl.textContent = date.format(dd, 'DD-MM-YY')
document.querySelector('.days').textContent = date.format(dd, 'dddd')

setInterval(function() {
    var d = new Date()
    hmsEl.textContent = date.format(d, 'h:mm:ss')
    document.querySelector('.ampm').textContent = date.format(d, 'A')
}, 1000)
