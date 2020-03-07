var hmsEl = document.querySelector('.hms')
var dd = new Date()

var dateEl = document.querySelector('.date')

dateEl.textContent = date.format(dd, 'DD-MM-YY')
document.querySelector('.days').textContent = date.format(dd, 'dddd')

setInterval(function() {
    var d = new Date()
    var sep = '<span>:</span>'
    if (d.getSeconds() % 2 === 0) {
        sep = '<span style="opacity: 0;">:</span>'
    }
    hmsEl.innerHTML = date.format(d, 'h') + sep + date.format(d, 'mm')
    document.querySelector('.ampm').textContent = date.format(d, 'A') === "p.m." ? "PM" : "AM"
}, 1000)
