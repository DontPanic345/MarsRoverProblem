

const assert = require('assert');
const problem = require('../src/marsrover');

const testinput = "5 5\n\
1 2 N\n\
LMLMLMLMM\n\
3 3 E"

const testoutput = "1 3 N\n\
5 1 E"


describe('MarsRoverProblem', function() {
  it(`should return ${testoutput} from ${testinput}`, function() {
    problem.readInput(testinput);
    assert.equal(testoutput, problem.readInput(testinput));
  });
});
