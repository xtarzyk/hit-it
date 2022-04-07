import {paintCircle, resetColors} from "./circles"
import {scores} from "./main"


const timer = document.createElement('div')
timer.classList.add('timer')

const createTimer = () => {
    const timerDiv = document.querySelector('.timer')
    let secondsLeft = 59
    let minutesLeft = 1
    const countDown = setInterval(() => {
        if (minutesLeft) {
            timerDiv.innerHTML = `Timer: 0${minutesLeft}:00`
            minutesLeft--
            resetColors()
            paintCircle()
            return
        }
        if (secondsLeft >= 0) {
            secondsLeft < 10 ? timerDiv.innerHTML = `Timer: 00:0${secondsLeft}` : timerDiv.innerHTML = `Timer: 00:${secondsLeft}`
            secondsLeft -= 1
            resetColors()
            paintCircle()

        } else {
            clearInterval(countDown)
            alert(`Score: ${scores}`)
        }
    }, 1000)
}


export {timer, createTimer}