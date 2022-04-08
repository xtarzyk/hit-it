import {paintCircle,resetColors} from './circles'
import {scores} from './main'

const timer = document.createElement('div')
timer.classList.add('timer')

const createTimer = () => {
    const timerDiv = document.querySelector('.timer')
    let secondsLeft = 60
    let minutesLeft = 1
    const countDown = setInterval(() => {
        if (secondsLeft / 60 > 0 && minutesLeft > 0) {
            timerDiv.innerHTML = `Timer: 0${minutesLeft}:00`
            minutesLeft--
            resetColors()
            paintCircle()
            return
        }
        if (secondsLeft % 60 >= 0) {
            secondsLeft--
            secondsLeft < 10 ? timerDiv.innerHTML = `Timer: 00:0${secondsLeft}` : timerDiv.innerHTML = `Timer: 00:${secondsLeft}`
            resetColors()
            paintCircle()
            return
        }
        clearInterval(countDown)
        alert(`Score: ${scores}`)
    }, 1000)
}


export {timer, createTimer}