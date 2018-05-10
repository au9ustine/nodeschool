// Quoted from https://github.com/timoxley/functional-javascript-workshop/blob/master/exercises/function_call/solution/solution.js

module.exports = Function.call.bind(Array.prototype.slice);
