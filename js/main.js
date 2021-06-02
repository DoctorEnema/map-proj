'use strict'

function init() {
    gUserPref = loadFromStorage('userPref')
    if (!gUserPref) gUserPref = createUserPref()
    renderUserPref(gUserPref)
}

function getHoroscopeMonth() {

    var givenDate = document.querySelector('#dob').valueAsNumber

    var currMonth = new Date(givenDate).getMonth() + 1

    gUserPref.mob = currMonth
}

function getFavColor() {
    var bgc = document.querySelector('input[name=background-color]').value
    var fontColor = document.querySelector('input[name=font-color]').value
    gUserPref.fontColor = fontColor
    gUserPref.bgc = bgc
}

function renderUserPref(userPref) {

    if (userPref.bgc || userPref.mob || userPref.fontColor) {
        document.querySelector('body').style.backgroundColor = `${userPref.bgc}`
        document.querySelector('body').style.color = `${userPref.fontColor}`

        if (!userPref.mob) console.log('No date');
        else if (userPref.mob <= 4) console.log('Horoscope 1');
        else if (userPref.mob > 4 && userPref.mob <= 8) console.log('Horoscope 2');
        else if (userPref.mob > 8) console.log('Horoscope 3');
    }
}