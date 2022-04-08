const gameContainer = document.createElement('div')
gameContainer.classList.add('game-container')
const circle = document.createElement('div')
circle.classList.add('game-container__circle')
let circles = Array.from({length: 5})
circles.fill(circle)


const createCircles = () => {
    let id = 0
    circles.forEach(() => {
        const newCircle = circle.cloneNode(true)
        newCircle.setAttribute('id', `${id}`)
        id++
        gameContainer.appendChild(newCircle)
    })
}

const paintCircle = () => {
    const circlesDivs = document.querySelectorAll('.game-container__circle')
    const circlesNum = circlesDivs.length
    const currentMark = Math.floor(Math.random() * circlesNum)
    circlesDivs.forEach((circle => {
        if(Number(circle.getAttribute('id')) === currentMark) {
            circle.classList.remove('game-container__circle')
            circle.classList.add('red-circle')
        }
    }))
}

const resetColors = () => {
    const circlesDivs = document.querySelectorAll('.red-circle, .green-circle')
    circlesDivs.forEach(circle => {
        circle.classList.remove('red-circle')
        circle.classList.remove('green-circle')
        circle.classList.add('game-container__circle')
    })
}

createCircles()

export {gameContainer, paintCircle, resetColors, createCircles}