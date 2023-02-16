

let hr = min = sec = ms = 0, startTimer;



const startBtn = document.querySelector(".Start-buttom")
const stopBtn = document.querySelector(".stop-buttom")
const resetBtn = document.querySelector(".reset-buttom")
const hrDOM = document.querySelector(".housrs")
const minDOM = document.querySelector(".min")
const secDOM = document.querySelector(".sec")
const msDOM = document.querySelector(".milliseconds")

startBtn.onclick = () => {
    //? Animations 
    startBtn.style.cursor = "not-allowed"
    startBtn.style.opacity = "0.3"
    stopBtn.style.opacity = "1"
    resetBtn.style.opacity = "1"
    startTimer = setInterval(() => {
        ms++
        if (ms < 10) {
            ms = "0" + ms
        } else {
            ms = ms
        }
        if (ms == 100) {
            sec++
            if (sec < 10) {
                sec = "0" + sec
            } else {
                sec = sec
            }
            ms = "0" + 0
        }
        if (sec == 60) {
            min++
            if (min < 10) {
                min = "0" + min
            } else {
                min = min
            }
            sec = "0" + 0
        }
        if (min == 60) {
            hr++
            if (hr < 10) {
                hr = "0" + hr
            } else {
                hr = hr
            }
            min = "0" + 0

        }
        putValue()     //* dom manupulation 
    }, 10) //? 1000ms = 1s 


}

stopBtn.onclick = () => {
    startBtn.style.opacity = "1"
    startBtn.style.cursor = "pointer"
    clearInterval(startTimer)

}

resetBtn.onclick = () => {
    startBtn.style.opacity = "1"
    startBtn.style.cursor = "pointer"
    clearInterval(startTimer)
    hr = min = sec = ms = 0, startTimer;
    putValue()
}

function putValue() {

    document.getElementById("timer").innerText = `${hr} : ${min} : ${sec} : ${ms}`

}
