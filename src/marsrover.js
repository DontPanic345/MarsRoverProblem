
function parseGrid(input) {
    try {
        firstline = input.split('\n')[0];
        coords = firstline.split(' ');
        x = parseInt(coords[0]);
        y = parseInt(coords[1]);
        
        return [null, [x,y]];

    } catch (err) {
        return ['Error parsing input: ' + err, null];
    }
    return ['Error parsing input', null];
}


function readInput(input) {
    
    var [err, size] = parseGrid(input);
    if (err) {
        console.log(err);
    } else {
        console.log(size);
    }

    return -1;
}

exports.readInput=readInput
exports.parseGrid=parseGrid