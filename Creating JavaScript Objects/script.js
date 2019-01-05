'use strict';

//////////////////////////////////////////////
// // Lesson 1- Upto Dynamic Nature of Javascript

// //display({task:1, description:'Hello World'});

// 
// var cat = {
//     name: 'Fluffy', 
//     color: 'White',
//     speak:function () {display('Meeeoow')}};

// //display(cat.name);
// cat.age = 3;
// //display(cat.age);

// //cat.speak = function () {display('Meeoow')};

// cat.speak();

//////////////////////////////////////////////
// // Lesson 1- Using Constructor Functions to Create JavaScript Objects 

// function Cat() {
//     this.name = 'Fluffy';
//     this.color = 'White';
// }

// var cat = new Cat();

// display(Cat);

//////////////////////////////////////////////
// // Lesson 1- Using Object.create() to Create JavaScript Objects
// var cat = Object.create(Object.prototype, {
//     name:{
//         value: 'Fluffy',
//         enumerable: true,
//         writable: true,
//         configurable: true,
//     },
//     color:{
//         value: 'White',
//         enumerable: true,
//         writable: true,
//         configurable: true,
//     }
// });

// display(cat);

//////////////////////////////////////////////
// // Lesson 1 - Using ECMAScript 6 Classes for Create Javascript Ojects

class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    speak() {
        display('Meeoow');
    }
}

var cat = new Cat('Fluffy', 'White');
display(cat);
cat.speak();
