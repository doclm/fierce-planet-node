
/**
 * Module dependencies.
 */

    /*
var directions = [0, 1, 3, 2];
for (var i = 0; i < directions.length; i++) {
    var dir = directions[i];
    if (i < 8)
        directions.push(directions[i]);
    console.log(i);
}
*/

var WS = 10;
var COUNTER = 0;
var cells = [];
for (var i = 0; i < WS; i++) {
    for (var j = 0; j < WS; j++) {
        cells.push([j, i]);

    }
}


delete cells[64];
delete cells[63];
delete cells[53];
delete cells[48];
delete cells[47];
delete cells[46];
delete cells[43];
delete cells[36];
delete cells[35];
delete cells[34];
delete cells[33];


var start = [5, 5]
var gx = 2, gy = 2
var goal = [gx, gy]

var history = []
var trails = {};

function meanDistance(cell){
    var x = cell[0], y = cell[1];
    return Math.abs(gx - x) + Math.abs(gy - y);
}
function isSameCell(c1, c2){
    return (c1 && c2 && c1[0] == c2[0] && c1[1] == c2[1])
}
function isCell(cell){
    for (var i in cells) {
        var testCell = cells[i]
        if (isSameCell(cell, testCell))
            return true;
    }
    return false;
}
function isInHistory(cell){
    for (var i in history) {
        var testCell = history[i]
        if (isSameCell(cell, testCell))
            return true;
    }
    return false;
}
function getDirections(cell){
    var x = cell[0], y = cell[1];
    var dx = gx - x, dy = gy - y;
    var directions = [];
    if (Math.abs(dx) < Math.abs(dy)) {
        if (dx < 0)
            directions = (dy < 0) ? [2, 3, 1, 0] : [2, 1, 3, 0];
        else
            directions = (dy < 0) ? [0, 3, 1, 2] : [0, 1, 3, 2];
    }
    else {
        if (dy < 0)
            directions = (dx < 0) ? [3, 2, 0, 1] : [3, 0, 2, 1];
        else
            directions = (dx < 0) ? [1, 2, 0, 3] : [1, 0, 2, 3];
    }
    return directions;
}

function evalCell2(cell, existingDistances, trail, depth, place){
    COUNTER++;
    existingDistances = existingDistances || [];
    trail = trail || [];
    depth = depth || 0;
    place = place || 0;
    history.push(cell)
    if (isSameCell(cell, goal)) {
        trail.push(cell);
        return cell;
    }
    var x = cell[0], y = cell[1];
    var directions = getDirections(cell);
    var candidates = [], distances = [];
    for (var i = 0; i < directions.length; i++) {
        var nx = x, ny = y;
        switch(directions[i]) {
            case 0:
                nx++;
                break;
            case 1:
                ny++;
                break;
            case 2:
                nx--;
                break;
            case 3:
                ny--;
                break;
        }
        var newCell = [nx, ny]
        if (nx < 0 || nx >= WS || ny < 0 || ny >= WS)
            continue;
        if (!isCell(newCell))
            continue;
        if (isInHistory(newCell))
            continue;
//        console.log("nc: "+newCell + ":" + isCell(newCell))
        candidates.push(newCell);
        distances.push(meanDistance(newCell));
    }
//    console.log("candidates for: " + [x, y] +" - "+candidates)
    var keepLooping = true;
    for (var i in candidates) {
        var candidate = candidates[i]
        var distance = distances[i]
        if (isSameCell(candidate, goal)) {
            trail.push(ret);
            console.log('found goal at depth: ' + depth);
            return ret;
        }

    }
    while(keepLooping) {
        keepLooping = false;
        for (var i in candidates) {
            var candidate = candidates[i]
            var distance = distances[i]
            var tooLong = true
            for (var j in existingDistances) {
                var ed = existingDistances[j]
                if (distance <= ed)
                    tooLong = false
            }

            existingDistances[i] = (distance)
            console.log('----')
            console.log(i)
            console.log(COUNTER+":"+candidate+":"+distance+":"+tooLong+":"+depth)
            console.log(existingDistances)
            if (tooLong) {
                continue;
            }
            var ret = evalCell(candidate, existingDistances, trail, ++depth, i)
//            console.log('ret '+ ret )
            if (isSameCell(ret, goal)) {
                trail.push(ret);
                return ret;
            }
            else if (ret) {
                existingDistances[i] = meanDistance(ret);
                console.log('----')
                console.log(meanDistance(ret))
                console.log(existingDistances)
                console.log('----')
                keepLooping = true;
    //            return ret;
            }
        }

    }
    return undefined;
}

MAX_DEPTH = 1000
function evalCell(cell){
    var depth = depth || 0;
    history.push(cell);
    var trails = {};
    trails[cell[1] * WS + cell[0]] = [cell];
    var candidates = [];
    candidates.push(cell);
    while (depth++ < MAX_DEPTH) {
        console.log(depth);
        var newCandidates = [];
        for (var i in candidates) {
            var candidate = candidates[i];
            var x = candidate[0], y = candidate[1];
            if (isSameCell(candidate, goal)) {
                return trails[y * WS + x];
            }
            var directions = getDirections(candidate);
            for (var j = 0; j < directions.length; j++) {
                var nx = x, ny = y;
                switch(directions[j]) {
                    case 0:
                        nx++;
                        break;
                    case 1:
                        ny++;
                        break;
                    case 2:
                        nx--;
                        break;
                    case 3:
                        ny--;
                        break;
                }
                var newCell = [nx, ny]
                if (nx < 0 || nx >= WS || ny < 0 || ny >= WS)
                    continue;
                if (!isCell(newCell))
                    continue;
                if (isInHistory(newCell))
                    continue;
//        console.log("nc: "+newCell + ":" + isCell(newCell))
                newCandidates.push(newCell);
                history.push(newCell)

                var candidateKey = y * WS + x;
                var candidateTrail = trails[candidateKey]
                var newCandidateKey = ny * WS + nx;
                var newCandidateTrail = []
                for (var k in candidateTrail) {
                    newCandidateTrail.push(candidateTrail[k]);
                }
                newCandidateTrail.push(newCell);
                trails[newCandidateKey] = newCandidateTrail;
                console.log(newCell +":"+trails[newCandidateKey]);
            }
        }
        candidates = [];
        for (var i in newCandidates) {
            candidates.push(newCandidates[i]);
        }
    }
    return undefined;
}

var res = evalCell(start);
console.log('===============')
//console.log(history)
console.log(res)
console.log(res.length)

