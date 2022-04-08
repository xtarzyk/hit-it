const gameContainer = document.createElement('div')
gameContainer.classList.add('game-container')
const circle = document.createElement('div')
circle.classList.add('game-container__circle')
let circles = Array.from({length:5})

const prepareUI = () => circles.fill(circle)

const createCircles = () => {
    circles.forEach(() => {
        const newCircle = circle.cloneNode(true)
        gameContainer.appendChild(newCircle)
    })
}

const paintCircle = () => {
    const circlesDivs = document.querySelectorAll('.game-container__circle')
    const circlesNum = circlesDivs.length
    const randomCircleNum = Math.floor(Math.random() * circlesNum)
    circlesDivs.forEach((circle, index) => {
        if (index === randomCircleNum) {
            circle.classList.remove('game-container__circle')
            circle.classList.add('red-circle')
        }
    })
}

const resetColors = () => {
    const circlesDivs = document.querySelectorAll('.red-circle, .green-circle')
    circlesDivs.forEach(circle => {
        circle.classList.remove('red-circle')
        circle.classList.remove('green-circle')
        circle.classList.add('game-container__circle')
    })
}

prepareUI()
createCircles()

export {
    gameContainer,
    paintCircle,
    resetColors,
    createCircles
}