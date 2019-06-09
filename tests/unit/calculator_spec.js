var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

});

describe('calculator adds', function () {
  it('should be able to add two numbers', function(){
    calculator = new Calculator()
    calculator.numberClick(1.0)
    calculator.operatorClick('+')
    calculator.numberClick(4.0)
    calculator.operatorClick('=')

    assert.equal(5.0, calculator.runningTotal )
  })
})

describe('calculator subtracts', function () {
  it('should be able to subtract two numbers', function(){
    calculator = new Calculator()
    calculator.numberClick(7.0)
    calculator.operatorClick('-')
    calculator.numberClick(4.0)
    calculator.operatorClick('=')

    assert.equal(3.0, calculator.runningTotal )
  })
})

describe('calculator multiply', function () {
  it('should be able to multiply two numbers', function(){
    calculator = new Calculator()
    calculator.numberClick(3.0)
    calculator.operatorClick('*')
    calculator.numberClick(5.0)
    calculator.operatorClick('=')

    assert.equal(15.0, calculator.runningTotal )
  })
})

describe('calculator divide', function () {
  it('should be able to divide two numbers', function(){
    calculator = new Calculator()
    calculator.numberClick(21.0)
    calculator.operatorClick('/')
    calculator.numberClick(7.0)
    calculator.operatorClick('=')

    assert.equal(3.0, calculator.runningTotal )
  })
})
