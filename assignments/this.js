
// Factory pattern
// prototypal pattern
// sudo classical
// class - syntactical sugar

// 1ST METHOD
	function CreateUser1(name, id, password, noOfProjects){
        let user={name, id, password, noOfProjects}
        user.getUsername = function(){return this.name};
        user.getPassword = function(){return this.password};
        user.getProjects = function(){return this.noOfProjects};

        user.changeUsername = function(newUsername){
            let oldUsername = this.name;
            this.name = newUsername;
            return oldUsername;
        };
        user.changePassword = function(newPassword){
            let oldPassword = this.password;
            this.password = newPassword;
            return oldPassword;
        };

		user.incrementProject = function() {
            return ++noOfProjects
        };
        user.decrementProject = function() {
            return --noOfProjects
        };
        
        return user;
    }
    
    console.log(CreateUser1("karen", 12, "sasasa", 4));
	
//2ND METHOD

	userMethods = {
        getUsername: function() {
            return this.name
        },
        getPassword: function() {
            return this.password
        },
        getProjects: function() {
            return this.noOfProjects
        },
        changeUsername: function(newUsername){
            let oldUsername = this.name;
            this.name = newUsername;
            return oldUsername;
        },
        changePassword: function(newPassword){
            let oldPassword = this.password;
            this.password = newPassword;
            return oldPassword;
        },

		incrementProject: function() {
            return ++noOfProjects
        },
        decrementProject: function() {
            return --noOfProjects
        }
    }
    
	function CreateUser2(name, id, password, noOfProjects){
		let user = Object.create(userMethods);
        user.name = name;
        user.id = id;
        user.password = password;
        user.noOfProjects = noOfProjects;
		return user;
	}
    console.log(CreateUser2("karen", 12, "sasasa", 4));

//3RD METHOD
	
	function CreateUser3(name, id, password, noOfProjects){
        this.name = name;
        this.id = id;
        this.password = password;
        this.noOfProjects = noOfProjects;
	}

	CreateUser3.prototype.getUsername = function() {
        return this.name
    };
    CreateUser3.prototype.getPassword = function() {
        return this.password
    };
    CreateUser3.prototype.getProjects = function() {
        return this.noOfProjects
    };
    CreateUser3.prototype.changeUsername = function(newUsername){
        let oldUsername = this.name;
        this.name = newUsername;
        return oldUsername;
    };
    CreateUser3.prototype.changePassword = function(newPassword){
        let oldPassword = this.password;
        this.password = newPassword;
        return oldPassword;
    };

    CreateUser3.prototype.incrementProject = function() {
        return ++noOfProjects
    };
    CreateUser3.prototype.decrementProject = function() {
        return --noOfProjects
    };

	
    let sam = new CreateUser3("sam", 123, "password", 5);
    console.log(sam.changePassword("damnitkaren"))
	
//4th METHOD Class
	class User {
		constructor(name, id, password, noOfProjects) {            
            this.name = name;
            this.id = id;
            this.password = password;
            this.noOfProjects = noOfProjects;
		}
		
        getUsername() {
            return this.name
        };
        getPassword() {
            return this.password
        };
        getProjects() {
            return this.noOfProjects
        };
        changeUsername(newUsername){
            let oldUsername = this.name;
            this.name = newUsername;
            return oldUsername;
        };
        changePassword(newPassword){
            let oldPassword = this.password;
            this.password = newPassword;
            return oldPassword;
        };
		incrementProject() {
            return ++noOfProjects
        };
        decrementProject() {
            return --noOfProjects
        };
	}
	
	let pika = new User("123", "123", "123", 123);	
	console.log(pika.changeUsername("pikapika"));
    
console.log(this.document === document); // Output

console.log(this === window); //Output

var myFunction = function() {
  console.log(this);
};
myFunction(); // Output 
//Object [global] in node
// Window in browser

function f1() {
  "use strict";
  return this;
}
console.log(f1() === window); //Output
//false in browser

function foo() {
  console.log("Simple function call");
  console.log(this === window);
}

foo(); //Output ??
// Simple function call
// true
console.log(this === window)(
  // Output
  // true

  // This for IIFE
  function() {
    console.log("Anonymous function invocation");
    console.log(this === window);
  }
)(); //Output
// Anonymous function invocation debugger eval code:2:13
// true

// This for IIFE in strict mode
function foo() {
  "use strict";
  console.log("Simple function call");
  console.log(this === window);
}

foo(); // Output
// Simple function call
// false

var myObject = {};
myObject.someMethod = function() {
  console.log(this);
};
myObject.someMethod(); //Value Of This
// { someMethod: [Function] }

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
// Name: John Reed
let person2 = new Person("Paul", "Adams");
person2.displayName(); // Output
// Name: Paul Adams

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
// Simple function call
// false

let fun1 = user.foo1;
fun1(); // Output ??
// true
user.foo1(); // Output ??
// false

//this will call apply and bind

this.x = 9;
var module = {
  x: 81,
  getX: function() {
    return this.x;
  }
};

console.log(module.getX()); // Output ??
// 81

var retrieveX = module.getX;
console.log(retrieveX()); //Output ??
// 9

var boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // Output ??
// 81
// Call with new constructor
// Object {  }

function Person(fn, ln) {
  this.first_name = fn;
  this.last_name = ln;

  this.displayName = function() {
    console.log(`Name: ${this.first_name} ${this.last_name}`);
  };
}

let person = new Person("John", "Reed");
person.displayName(); // Output
// Name: John Reed
let person2 = new Person("Paul", "Adams");
person2.displayName(); // Output
// Name: Paul Adams
person.displayName.call(person2); // Output ??
// Name: Paul Adams

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
console.log(obj.getThis());
// Window

// Output
console.log(obj.getThis.call(a));
// Window

// Output
console.log(obj.getThis2());
// Object { getThis: getThis(), getThis2: getThis2(), getThis3: getThis(), getThis4: getThis2() }

// Output
console.log(obj.getThis2.call(a));
// Object { a: "a" }

// Output
console.log(obj.getThis3());
// Window

// Output
console.log(obj.getThis3.call(a));
// Window

// Output
console.log(obj.getThis4());
// Object { getThis: getThis(), getThis2: getThis2(), getThis3: getThis(), getThis4: getThis2() }

// Output
console.log(obj.getThis4.call(a));
// Object { a: "a" }
