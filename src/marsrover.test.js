

const assert = require('assert');
const mars = require('./marsrover');

const testinput1 = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`

const testoutput1 = `1 3 N
5 1 E`


describe('Mars Rover Challenge', function () {
  describe('Parse Input', function () {
    it('should correctly parse the grid', function () {
      let [err, grid] = mars.parseGrid('5 5');
      assert.deepEqual(grid, [5, 5]);
    })
  })

  describe('Parse rover details', function () {
    it('should correct parse rover details', function () {
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

  })

  describe('Final Tests', function () {
    it(`should return \n${testoutput1} \nfrom \n${testinput1}`, function () {
      assert.equal(mars.readInput(testinput1), testoutput1);
    });

    // it(`should return \n${testoutput2} \nfrom \n${testinput2}`, function() {
    //   assert.equal(testoutput2, mars.readInput(testinput2));
    // });
  });
});
