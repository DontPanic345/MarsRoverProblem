# Mars Rover Problem

![build](https://gitlab.com/falloonalan/MarsRoverProblem/badges/master/build.svg)


## Brief

The problem is to take a grid size, list of rover coordinates and moves to make around the grid. Then problem is to calculate the final position of each rover. 

The solution I've built only takes input from the unit tests.

## Installation and Testing Instructions
To install on a ubuntu use the following

```
apt-get update
apt-get install curl git -qq
curl -sL https://deb.nodesource.com/setup_8.x | bash -
apt-get install nodejs -qq
git clone https://github.com/DontPanic345/MarsRoverProblem.git
cd MarsRoverProblem
node --version
npm --version
npm install
npm test
```

Automated tests are carried out by gitlab.com, you can see the results [here](https://gitlab.com/falloonalan/MarsRoverProblem/pipelines?scope=finished&page=1). Tests are from a fresh ubuntu docker image and also tests against node 9.

## Full Description

A squad of robotic rovers are to be landed by NASA on a plateau on Mars.
This plateau, which is curiously rectangular, must be navigated by the
rovers so that their on-board cameras can get a complete view of the
surrounding terrain to send back to Earth.


A rover's position and location is represented by a combination of x and y
co-ordinates and a letter representing one of the four cardinal compass
points. The plateau is divided up into a grid to simplify navigation. An
example position might be 0, 0, N, which means the rover is in the bottom
left corner and facing North. In order to control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90
degrees left or right respectively, without moving from its current spot.
'M' means move forward one grid point, and maintain the same heading.
Assume that the square directly North from (x, y) is (x, y+1).


### INPUT:

The first line of input is the upper-right coordinates of the plateau, the
lower-left coordinates are assumed to be 0,0.
The rest of the input is information pertaining to the rovers that have
been deployed. Each rover has two lines of input. The first line gives the
rover's position, and the second line is a series of instructions telling
the rover how to explore the plateau.
The position is made up of two integers and a letter separated by spaces,
corresponding to the x and y co-ordinates and the rover's orientation.
Each rover will be finished sequentially, which means that the second rover
won't start to move until the first one has finished moving.


### OUTPUT:

The output for each rover should be its final co-ordinates and heading.


**Test​ Input:**

```
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
```

**Expected Output:**

```
1 3 N
5 1 E
```

## Notes

I didn't impliment full testing of all possible cases that would cause a failure, so some inputs can cause the program to crash. Typically I only tested for one possble invalid input for each function. Instead I was interested in getting automated testing set up which is something I've been meaning to try out for a long time now. In doing so I was able to brush up on my docker knowlege as well, by setting one of the tests to use an Alipne image I signifcantly reduced the setup and test time of that job, it was easy to test against a different Node version at the same time as well, and because I tested using an Ubuntu image I was able to write bullet proof installation instructions.