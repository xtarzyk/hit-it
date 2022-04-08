const gameContainer = document.createElement('div')
gameContainer.classList.add('game-container')
const circle = document.createElement('div')
circle.classList.add('game-container__circle')
const circles = Array.from({ length:5 })

const prepareUI = () => circles.fill(circle)

const createCircles = () => {
    const circleNodes = circles.map(() => circle.cloneNode(true))
    circleNodes.forEach(circleNode => {
        gameContainer.appendChild(circleNode)
    })
    return circleNodes
}

const paintCircle = circlesDivs => {
    const circlesNum = circlesDivs.length
    const randomCircleNum = Math.floor(Math.random() * circlesNum)
    circlesDivs.forEach((circle, index) => {
        if (index === randomCircleNum) {
            circle.classList.remove('game-container__circle')
            circle.classList.add('red-circle')
        }
    })
}

const resetColors = circlesDivs => {
    circlesDivs.forEach(circle => {
        circle.classList.remove('red-circle')
        circle.classList.remove('green-circle')
        circle.classList.add('game-container__circle')
    })
}

prepareUI()

export {
    gameContainer,
    paintCircle,
    resetColors,
    createCircles
}