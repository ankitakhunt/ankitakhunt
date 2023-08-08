console.log('This is tutorial 53');

function greet(name, greetText = 'Greetings from javascript') {
  let name1 = 'Name1';
  console.log(name + ' is a good girl');
  console.log(greetText + ' ' + name);
}

function sum(a, b, c) {
  let d = a + b + c;
  return d;
  // This line will never execute(unreachable code)
  // console.log('Function is returned');
}
let name = 'Dazzy';
let name1 = 'Nisha';
let name2 = 'Kavya';
let name3 = 'Kavita';
// console.log(name + ' is a good girl');
// console.log(name1 + ' is a good girl');
// console.log(name2 + ' is a good girl');
// console.log(name3 + ' is a good girl');
let greetText1 = 'Good Morning';
greet(name, greetText1);
greet(name1, greetText1);
greet(name2, greetText1);
// let returnVal = greet(name3);
// console.log(returnVal);
let returnVal = sum(1, 2, 3);
console.log(returnVal);
