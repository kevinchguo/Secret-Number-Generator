"use strict";
module.exports = function() {
  let randomNum = Math.floor(Math.random() * 1000001);
  return function() {
    return randomNum;
  };
};
