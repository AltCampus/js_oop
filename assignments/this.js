console.log(this.document === document); // Output

console.log(this === window); //Output

var myFunction = function() {
  console.log(this);
};
myFunction(); // Output

function f1() {
  "use strict";
  return this;
}
console.log(f1() === window); //Output

function foo() {
  console.log("Simple function call");
  console.log(this === window);
}

foo(); //Output ??
console.log(this === window)(
  // Output

  // This for IIFE
  function() {
    console.log("Anonymous function invocation");
    console.log(this === window);
  }
)(); //Output

// This for IIFE in strict mode
function foo() {
  "use strict";
  console.log("Simple function call");
  console.log(this === window);
}

foo(); // Output

var myObject = {};
myObject.someMethod = function() {
  console.log(this);
};
myObject.someMethod(); //Value Of This

// This refers to the New Instance

function Person(fn, ln) {
  this.first_name = fn;
  this.last_name = ln;

  this.displayName = function() {
    console.log(`Name: ${this.first_name} ${this.last_name}`);
  };
}

let person = new Person("John", "Reed");
person.displayName(); // Output
let person2 = new Person("Paul", "Adams");
person2.displayName(); // Output

//This refers to the invoker Object
function foo() {
  "use strict";
  console.log("Simple function call");
  console.log(this === window);
}

let user = {
  count: 10,
  foo: foo,
  foo1: function() {
    console.log(this === window);
  }
};

user.foo(); // Output
let fun1 = user.foo1;
fun1(); // Output ??
user.foo1(); // Output ??

//this will call apply and bind

this.x = 9;
var module = {
  x: 81,
  getX: function() {
    return this.x;
  }
};

module.getX(); // Output ??

var retrieveX = module.getX;
retrieveX(); //Output ??

var boundGetX = retrieveX.bind(module);
boundGetX(); // Output ??

// Call with new constructor

function Person(fn, ln) {
  this.first_name = fn;
  this.last_name = ln;

  this.displayName = function() {
    console.log(`Name: ${this.first_name} ${this.last_name}`);
  };
}

let person = new Person("John", "Reed");
person.displayName(); // Output
let person2 = new Person("Paul", "Adams");
person2.displayName(); // Output

person.displayName.call(person2); // Output ??

// Guess the output of the following

const a = {
  a: "a"
};
const obj = {
  getThis: () => this,
  getThis2() {
    return this;
  }
};
obj.getThis3 = obj.getThis.bind(obj);
obj.getThis4 = obj.getThis2.bind(obj);

// Output
obj.getThis();

// Output
obj.getThis.call(a);

// Output
obj.getThis2();

// Output
obj.getThis2.call(a);

// Output
obj.getThis3();

// Output
obj.getThis3.call(a);

// Output
obj.getThis4();

// Output
obj.getThis4.call(a);
