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

// var cat = {
//     name: 'Fluffy',
//     color: 'White'
// }
// Object.defineProperty(cat, 'name', {writable: false});
// cat.name = 'Scratchy';
// display(Object.getOwnPropertyDescriptor(cat, 'name'));

//////////////////////////////////////////////
// // Lesson 2- Using the Enumerable Attribute

// var cat = {
//     name: {first:'Fluffy', last: 'LaBeouf'},
//     color: 'White'
// }

// Object.defineProperty(cat, 'name', {enumerable:false});

// for (const propertyName in cat) {
//     display(propertyName + ': ' + cat[propertyName])
// }

//////////////////////////////////////////////
// // Lesson 2- Using the Configurable Attribute

// Can not change the Enumerable Attribute
// Can not change the Configurable Attribute
// Can not delete a property

//////////////////////////////////////////////
// // Lesson 2- Getters and Setters

var cat = {
    name: {first:'Fluffy', last: 'LaBeouf'},
    color: 'White'
}

Object.defineProperty(cat, 'fullName',
{
    get : function () {
        return this.name.first + ' ' + this.name.last
    },
    set: function(value) {
        var nameParts = value.split(' ');
        this.name.first = nameParts[0];
        this.name.last = nameParts[1]; 
    }
})

cat.fullName = 'Muffin Top';
display(cat.fullName);
display(cat.name.first)
display(cat.name.last)