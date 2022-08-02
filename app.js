let promptInfo = prompt('Hoşgeldiniz! İsminiz?')
let userName = `${promptInfo[0].toUpperCase()}${promptInfo.slice(1)} `
let userNameDOM = document.querySelector('#userName')
userNameDOM.innerHTML = userName

function showTime() {
    let date = new Date()

    let timeDOM = document.querySelector('#myClock')

    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

    hh = date.getHours()

    mm = date.getMinutes()

    ss = date.getSeconds()

    dd = date.getDay()

    hh = (hh < 10) ? '0' + hh : hh
    mm = (mm < 10) ? '0' + mm : mm
    ss = (ss < 10) ? '0' + ss : ss
    timeDOM.innerHTML = `${hh}:${mm}:${ss} ${days[dd]}`

    setTimeout(showTime, 1000)


}

showTime()


