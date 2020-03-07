var hmsEl = document.querySelector('.hms')
var dateEl = document.querySelector('.date')
var date = new Date()
var month = date.getMonth() + 1
var year = date.getFullYear() - 2000
var dates = date.getDate()
var day = date.getDay()

var weekDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

document.querySelector('.days').textContent = weekDay[day]

if (month < 10) {
    month = '0' + month
}
if (dates < 10) {
    dates = '0' + dates
}
dateEl.innerHTML = `${dates}-${month}-${year}`

setInterval(function() {
    var d = new Date()
    var hour = d.getHours()
    var min = d.getMinutes()
    var sec = d.getSeconds()
    var sep = `<span>:</span>`
    var ampm = 'AM'
    if (hour > 12) {
        hour = hour - 12
        ampm = 'PM'
    }
    if (hour === 0) {
        hour = 12
    }
    if (min < 10) {
        min = '0' + min
    }
    if (sec < 10) {
        sec = '0' + sec
    }

    hmsEl.innerHTML = `${hour} ${sep} ${min} ${sep} ${sec}`
    document.querySelector('.ampm').textContent = ampm
}, 1000)
