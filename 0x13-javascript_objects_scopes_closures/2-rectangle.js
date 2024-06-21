#!/usr/bin/node

'use strict';

class Rectangle {
  constructor (w, h) {
    if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
      // If width or height is not a positive integer or is 0, create an empty object
      return {};
    } else {
      // Otherwise, initialize instance attributes
      this.width = w;
      this.height = h;
    }
  }
}

module.exports = Rectangle;
