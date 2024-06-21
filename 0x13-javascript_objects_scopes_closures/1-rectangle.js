#!/usr/bin/node

'use strict';

class Rectangle {
  constructor (w, h) {
    this.width = w;
    this.height = h;
  }
}

// Example usage:
const myRectangle = new Rectangle(5, 10);
console.log('Width:', myRectangle.width); // Output: Width: 5
console.log('Height:', myRectangle.height); // Output: Height: 10
