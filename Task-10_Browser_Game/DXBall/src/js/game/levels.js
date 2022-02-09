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
    speed: 2,
    structure: [
        [0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    ]
}

const level2 = {
    speed: 4,
    structure: [
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
}
const level3 = {
    speed: 6,
    structure: [
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
}

const level4 = {
    speed: 8,
    structure: [
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
}

const level5 = {
    speed: 10,
    structure: [
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
}
export const levels = [level1, level2, level3, level4, level5];