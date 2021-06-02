'use strict'


var gUserPref = createUserPref()

function submitForm(ev) {
    ev.preventDefault()
    getFavColor()
    getHoroscopeMonth()

    saveToStorage('userPref', gUserPref)
    renderUserPref(gUserPref)
}

function createUserPref() {
    var userPref = {
        mob: null,
        bgc: null,
        fontColor: null,
    }
    return userPref
}