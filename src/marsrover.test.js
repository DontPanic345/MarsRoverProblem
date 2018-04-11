

const assert = require('assert');
const problem = require('../src/marsrover');

const testinput1 = `5 5
1 2 N
LMLMLMLMM
3 3 E`

const testoutput1 = `1 3 N
5 1 E`

const testinput2 = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`

const testoutput2 = `1 3 N
5 1 E`

describe('MarsRoverProblem', function() {
  describe('Final Tests', function() {
    it(`should return \n${testoutput1} \nfrom \n${testinput1}`, function() {
      assert.equal(testoutput1, problem.readInput(testinput1));
    });

    it(`should return \n${testoutput2} \nfrom \n${testinput2}`, function() {
      assert.equal(testoutput2, problem.readInput(testinput2));
    });
  });
});
