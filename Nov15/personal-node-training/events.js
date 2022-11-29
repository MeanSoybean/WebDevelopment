// Create your own events through EventEmitter
const { EventEmitter } = require('events')
/* notes 
// this is the same as saying
// const EventEmitter = require('events')
// or
// const bababooey = require('events').EventEmitter
// https://stackoverflow.com/questions/33798717/javascript-es6-const-with-curly-braces
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
*/

const eventEmitter = new EventEmitter();

// Handle
eventEmitter.on('baba', () => {
    console.log('booey')
})

/*
eventEmitter.on('nameOfMyEvent', myCallBackFunction)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
() => {} is a specific usage of lambda expressions, aka anonymous functions
() => {} is almost the same as function() {}

// all of these work
param => expression
(param) => expression
(param1, paramN) => expression
param => {
  statements
}
(param1, paramN) => {
  statements
}
*/

// Emit
eventEmitter.emit('baba')

/*
// line 22 fires the 'baba' event in eventEmitter
// which causes the function () => { console.log('booey')} to be run
*/
