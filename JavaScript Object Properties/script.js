'use strict';

//////////////////////////////////////////////
// // Lesson 2- Using Bracket Notation to Access Javascript Properties

// var cat = {
//     name: 'Fluffy',
//     color: 'White'
// }

// display(cat.color);
// display(cat['color']);

// cat['Eye Color'] = 'Green';
// display(cat['Eye Color']);

//////////////////////////////////////////////
// // Lesson 2- Using Javascript Property Descriptors

// var cat = {
//     name: 'Fluffy',
//     color: 'White'
// }

// display(Object.getOwnPropertyDescriptor(cat, 'name'));

//////////////////////////////////////////////
// // Lesson 2- Using the Writable Attribute

var cat = {
    name: 'Fluffy',
    color: 'White'
}
Object.defineProperty(cat, 'name', {writable: false});
cat.name = 'Scratchy';
display(Object.getOwnPropertyDescriptor(cat, 'name'));
