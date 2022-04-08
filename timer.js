import { paintCircle, resetColors, createCircles } from './circles'
import { scores } from './main'

const timer = document.createElement('div')
timer.classList.add('timer')

const circles = createCircles()

const createTimer = () => {
    const timerDiv = document.querySelector('.timer')
    let secondsLeft = 60
    let minutesLeft = 1
    const countDown = setInterval(() => {
        if (minutesLeft > 0) {
            timerDiv.innerHTML = `Timer: 0${minutesLeft}:00`
            minutesLeft--
            resetColors(circles)
            paintCircle(circles)
            return
        }
        if (secondsLeft > 0) {
            secondsLeft--
            secondsLeft < 10 ? timerDiv.innerHTML = `Timer: 00:0${secondsLeft}` : timerDiv.innerHTML = `Timer: 00:${secondsLeft}`
            resetColors(circles)
            paintCircle(circles)
            return
        }
        clearInterval(countDown)
        alert(`Score: ${scores}`)
    }, 1000)
}


export { timer, createTimer }