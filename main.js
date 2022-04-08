import {timer, createTimer} from "./timer"
import {gameContainer} from "./circles"

const app = document.getElementById('app')
app.appendChild(timer)
app.appendChild(gameContainer)

const circles = document.querySelectorAll('.game-container__circle')
export let scores = 0
const hitCircle = () => circles.forEach(circle => {
    circle.addEventListener('click', event => {
        if (event.target.classList.contains('red-circle')) {
            event.target.classList.remove('red-circle')
            event.target.classList.add('green-circle')
            scores++
        }
    })
})

createTimer()
hitCircle()