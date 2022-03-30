import Brick from "./brick";

export  function buildLevel(game, levelStructure) {
    let bricks = [];
    levelStructure.forEach((row, rowIndex) => {
        row.forEach((brickStatus, brickStatusIndex) => {
            if(brickStatus === 1) {
                let position = {
                    x: 80 * brickStatusIndex,
                    y: 75 + 40 * rowIndex
                };
                bricks.push(new Brick(game, position))
            }
        })
    })
    return bricks;
}

const level1 = {
    speed: {
        x: 2,
        y: 2
    },
    structure: [
        [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
        [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],
        [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    ]
}

const level2 = {
    speed: {
        x: -3,
        y: 3
    },
    structure: [
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
}
const level3 = {
    speed: {
        x: 4,
        y: -4
    },
    structure: [
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
}

const level4 = {
    speed: {
        x: -4,
        y: -4
    },
    structure: [
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
}

const level5 = {
    speed: {
        x: 5,
        y: -5
    },
    structure: [
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    ]
}
export const levels = [level1, level2, level3, level4, level5];