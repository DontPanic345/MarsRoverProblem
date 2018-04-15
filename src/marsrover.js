
function parseGrid(firstline) {

    coords = firstline.split(' ');
    if (coords.length == 2) {
        x = Number(coords[0]);
        y = Number(coords[1]);

        return [null, [x, y]];
    }
    return ['Error: Grid size must be 2 numbers', null];
}

function getRoverPosition(roverDescription) {
    let input = roverDescription.split(' ');

    if (input.length == 3) {
        let rover = {
            x: Number(input[0]),
            y: Number(input[1]),
            dir: input[2]
        }
        return [null, rover]
    } else {
        return ['Error: Rover details must have at 3 values', null]
    }
}

function checkOnGrid(grid, rover) {

    minx = Math.min(0, grid[0])
    maxx = Math.max(0, grid[0])
    miny = Math.min(0, grid[1])
    maxy = Math.max(0, grid[1])

    if (rover.x < minx || maxx < rover.x) {
        return [null, false];
    } else if (rover.y < miny || maxy < rover.y) {
        return [null, false];
    }
    return [null, true];
}

function doRoverMoves(grid, rover, moves) {

    if (!rover) {
        return [`Error: doRoverMoves given ${rover} as rover`, null];
    } else if (!moves) {
        return [`Error: doRoverMoves given ${moves} for moves`, null];
    }

    for (let index = 0; index < moves.length; index++) {
        const move = moves[index];

        switch (move) {
            case 'L':
                switch (rover.dir) {
                    case 'N':
                        rover.dir = 'W';
                        break;
                    case 'E':
                        rover.dir = 'N';
                        break;
                    case 'S':
                        rover.dir = 'E';
                        break;
                    case 'W':
                        rover.dir = 'S';
                        break;
                    default:
                        return ['Error: Rover has invalid direction', null]
                        break;
                }
                break;
            case 'R':
                switch (rover.dir) {
                    case 'N':
                        rover.dir = 'E';
                        break;
                    case 'E':
                        rover.dir = 'S';
                        break;
                    case 'S':
                        rover.dir = 'W';
                        break;
                    case 'W':
                        rover.dir = 'N';
                        break;
                    default:
                        return ['Error: Rover has invalid direction', null]
                        break;
                }
                break;
            case 'M':
                switch (rover.dir) {
                    case 'N':
                        rover.y++;
                        break;
                    case 'E':
                        rover.x++;
                        break;
                    case 'S':
                        rover.y--;
                        break;
                    case 'W':
                        rover.x--;
                        break;
                    default:
                        return ['Error: Rover has invalid direction', null]
                        break;
                }

                var [err, onGrid] = checkOnGrid(grid, rover)
                if (err) {
                    return [err, null];
                } else if (!onGrid) {
                    return ['Error: Rover has crashed off the plateau!', null]
                }

                break;
            default:
                return ['Error: Rover has an invalid move', null]
                break;
        }
    }
    return [null, rover];
}

function readInput(input) {

    let output = '';
    let lines = input.split('\n');
    let [err, size] = parseGrid(lines[0]);
    if (err) {
        console.log(err);
        return -1
    }

    for (let index = 1; index < lines.length - 1; index += 2) {
        let roverDescription = lines[index];
        let roverMoves = lines[index + 1];

        let [err, rover] = getRoverPosition(roverDescription);
        if (err) {
            console.log(err);
            return -1
        }
        [err, rover] = doRoverMoves(size, rover, roverMoves)
        if (err) {
            console.log(err);
            return -1;
        }

        output += `${rover.x} ${rover.y} ${rover.dir}\n`;
    }

    //remove the extra new line at the end
    return output.trim();
}

exports.readInput = readInput
exports.parseGrid = parseGrid
exports.getRoverPosition = getRoverPosition
exports.doRoverMoves = doRoverMoves
exports.checkOnGrid = checkOnGrid
