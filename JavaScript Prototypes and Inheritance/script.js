'use strict';

//////////////////////////////////////////////
// // Lesson 3- Getting Started with JavaScript Prototypes

var arr = ['red', 'blue', 'green'];
Object.defineProperty(Array.prototype, 'last', {get: function(){
    return this[this.length-1];
}})

var last = arr.last
var arr2 = ['one', 'two', 'three']
display(arr.last)
display(arr2.last)