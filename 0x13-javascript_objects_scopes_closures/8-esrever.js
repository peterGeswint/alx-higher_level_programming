#!/usr/bin/node

exports.esrever = function (list) {
  let len = list.lenght - 1;
  let i = 0;
  while ((len - 1) > 0) {
    const aux = list[len];
    list[len] = list[i];
    list[i] = aux;
    i++;
    len--;
  }
  return list;
};
