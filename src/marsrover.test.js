const assert = require('assert');
const mars = require('./marsrover');

describe('Mars Rover Challenge', function () {
  describe('Parse Input', function () {
    it('should correctly parse the grid', function () {
      let [err, grid] = mars.parseGrid('5 5');
      assert.deepEqual(grid, [5, 5]);
    })

    it('should fail with invalid grid', function () {
      let [err, grid] = mars.parseGrid('5');
      assert.equal(err, 'Error: Grid size must be 2 numbers');
    })
  })

  describe('Parse rover details', function () {
    it('should correctly parse rover details', function () {
      let [err, rover] = mars.getRoverPosition('1 2 N');
      assert.deepEqual(rover, { x: 1, y: 2, dir: 'N' })
    })
  })

  describe('Move the rover', function () {
    let testSize = [5, 5];
    let testRover = { x: 1, y: 2, dir: 'N' };
    let testMoves = 'LMLMLMLMM';

    it('should correctly move the rover around the gird', function () {
      let [err, rover] = mars.doRoverMoves(testSize, testRover, testMoves);
      assert.deepEqual(rover, { x: 1, y: 3, dir: 'N' });
    })

    it('should fail when given an invalid rover', function () {
      let [err, rover] = mars.doRoverMoves(testSize, null, testMoves);
      assert.equal(err, 'Error: doRoverMoves given null as rover');
    })

    it('should fail when given invalid moves', function () {
      let [err, rover] = mars.doRoverMoves(testSize, testRover, null);
      assert.equal(err, 'Error: doRoverMoves given null for moves');
    })

    describe('Test if the rover is on the grid', function () {
      it('should check if the rover is off the grid', function () {
        let [err, offGrid] = mars.checkOnGrid([5, 5], {x: 6, y: 2});
        assert.equal(offGrid, false);
      })
  
      it('should check if the rover is on the grid', function () {
        let [err, offGrid] = mars.checkOnGrid([5, 5], {x: 5, y: 5});
        assert.equal(offGrid, true);
      })
    })
  })

  describe('Final Tests', function () {
    const testinput1 = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`
    
    const testoutput1 = `1 3 N
5 1 E`

    const crashinput = `5 5
1 2 N
MMMMM`

    it(`should pass the example test`, function () {
      assert.equal(mars.readInput(testinput1), testoutput1);
    });

    it('should test if the rover has gone off the grid', function () {
      assert.equal(mars.readInput(crashinput), -1);
    })

    it('should fail with invalid rover description', function () {
      const invalidDescription = `5 5
1 2
LMLMLMLMM`;
      assert.equal(mars.readInput(invalidDescription), -1);
    })

    it('should fail with invalid rover direction', function () {
      const invalidDirection =`5 5
1 2 NE
LMLMXXX`
      assert.equal(mars.readInput(invalidDirection), -1);
    })

    it('should fail with invalid rover moves', function () {
      const invalidMove =`5 5
1 2 N
LMLMXXX`
      assert.equal(mars.readInput(invalidMove), -1);
    })

  });
});
