// User
//  - score
//  - name
//  - sayName
//  - increaseScore
//  - decreaseScore

// Factory

function createUser(name, score) {
  var obj = {};
  obj.name = name;
  obj.score = score;
  obj.sayName = function() {
    alert(this.name);
  };
  obj.increaseScore = function() {
    this.score = this.score + 1;
    return this.score;
  };
  obj.decreaseScore = function() {
    this.score = this.score - 1;
    return this.score;
  };
  return obj;
}

//  PaidUser
//  - score
//  - balance
//  - name
//  - sayName
//  - increaseScore
//  - increaseBalance
//  - decreaseScore
//  - decreaseBalance
function createPaidUser(name, score, balance) {
  var obj = createUser(name, score);
  obj.balance = balance;
  obj.increaseBalance = function() {
    this.balance = this.balance + 1;
    return this.balance;
  };
  obj.decreaseBalance = function() {
    this.balance = this.balance - 1;
    return this.balance;
  };
  return obj;
}

// prototypal
const userMethods = {
  sayName: function() {
    alert(this.name);
  },
  increaseScore: function() {
    this.score = this.score + 1;
    return this.score;
  },
  decreaseScore: function() {
    this.score = this.score - 1;
    return this.score;
  }
};

function createUser(name, score) {
  var obj = Object.create(userMethods);
  obj.name = name;
  obj.score = score;
  return obj;
}

const paidUserMethods = {
  increaseBalance: function() {
    this.balance = this.balance + 1;
    return this.balance;
  },
  decreaseBalance: function() {
    this.balance = this.balance - 1;
    return this.balance;
  }
};

Object.setPrototypeOf(paidUserMethods, userMethods);

function createPaidUser(name, score, balance) {
  var obj = createUser(name, score);
  Object.setPrototypeOf(obj, paidUserMethods);
  obj.balance = balance;
  return obj;
}

var shivam = createPaidUser("Shivam", 10, 50);

// pseudoclassical
function CreateUser(name, score) {
  this.name = name;
  this.score = score;
}
CreateUser.prototype.sayName = function() {
  console.log(this.name);
};
CreateUser.prototype.increaseScore = function() {
  console.log(this.score++);
};
CreateUser.prototype.decreaseScore = function() {
  console.log(this.score--);
};

var bhatia = new CreateUser("Bhatia", 100);

function CreatePaidUser(name, score, balance) {
  CreateUser.call(this, name, score);
  this.balance = balance;
}
// CreatePaidUser.prototype = Object.create(CreateUser.prototype);

CreatePaidUser.prototype.increaseBalance = function() {
  console.log(this.balance++);
};
CreatePaidUser.prototype.decreaseBalance = function() {
  console.log(this.balance--);
};

Object.setPrototypeOf(CreatePaidUser.prototype, CreateUser.prototype);

var bhatia = new CreatePaidUser("Bhatia", 100, 400);

// class

class User {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  sayName() {
    return this.name;
  }
  increaseScore() {
    return this.score++;
  }
  decreaseScore() {
    return this.score--;
  }
}

class PaidUser extends User {
  constructor(name, score, balance) {
    super(name, score);
    this.balance = balance;
  }
  increaseBalance() {
    return this.balance++;
  }
  decreaseBalance() {
    return this.balance--;
  }
}

var tejas = new PaidUser("Tejas", 1000);
// User
// Data:
// 1. Math
// 2. English
// 3. Science
// 4. Name

// Methods:

// fullMarks
// percentage
// passOrFail

// PaidUser inherit from user
// Data:
// 5. Kannada
// 6. Hindi

// Methods:

// languagePecantage
// changeName

// Factory Pattern

// function createUser(name, maths, science, english) {
//   let obj = {};
//   obj.name = name;
//   obj.maths = maths;
//   obj.science = science;
//   obj.english = english;
//   obj.fullMarks = function() {
//     return obj.maths + obj.science + obj.english;
//   };
//   obj.percentage = function() {
//     return Math.floor((obj.maths + obj.science + obj.english) / 3);
//   };
//   obj.passOrFail = function() {
//     return obj.percentage() > 40 ? true : false;
//   };
//   return obj;
// }

// let aswin = createUser("Aswin", 78, 70, 90);
// console.log(aswin.fullMarks());
// console.log(aswin.percentage());
// console.log(aswin.passOrFail());

// Lots of repetation of methods

// Prototypal;

// var userMethods = {
//   fullMarks: function() {
//     return `Total Marks: ${this.maths + this.science + this.english}`;
//   },
//   percentage: function() {
//     console.log(
//       `Percentage: ${Math.floor(
//         (this.maths + this.science + this.english) / 3
//       )}%`
//     );
//     return Math.floor((this.maths + this.science + this.english) / 3);
//   },
//   passOrFail: function() {
//     return this.percentage() > 40 ? "You Passed" : "You Failed";
//   }
// };
// var paidUserMethods = {
//   changeName: function(name) {
//     this.name = name;
//     return this.name;
//   },
//   languagePercentage: function() {
//     console.log(
//       `Percentage: ${Math.floor(
//         (this.kannada + this.hindi + this.english) / 3
//       )}%`
//     );
//     return Math.floor((this.maths + this.science + this.english) / 3);
//   }
// };

// Object.setPrototypeOf(paidUserMethods, userMethods);

// function createUser(name, maths, science, english) {
//   let obj = Object.create(userMethods);
//   obj.name = name;
//   obj.maths = maths;
//   obj.science = science;
//   obj.english = english;

//   return obj;
// }
// function createPaidUser(name, maths, science, english, kannada, hindi) {
//   let obj = createUser(name, maths, science, english);
//   Object.setPrototypeOf(obj, paidUserMethods);
//   obj.kannada = kannada;
//   obj.hindi = hindi;

//   return obj;
// }

// let aswin = createUser("Aswin", 78, 70, 90);
// console.group("Aswin");
// console.log(aswin.fullMarks());
// console.log(aswin.percentage());
// console.log(aswin.passOrFail());
// console.log(aswin);
// console.groupEnd();
// console.group("Piyush");
// let piyush = createPaidUser("Piyush", 78, 98, 90, 70, 65);
// console.log(piyush.fullMarks(), "piyush");
// console.log(piyush.percentage(), "piyush");
// console.log(piyush.passOrFail(), "piyush");
// console.log(piyush.languagePercentage(), "piyush");
// console.log(piyush.changeName("piyushsi"), "piyush");
// console.log(piyush);
// console.groupEnd();

// // Pseudoclassical

CreateUser.prototype = {
  fullMarks: function() {
    return `Total Marks: ${this.maths + this.science + this.english}`;
  },
  percentage: function() {
    console.log(
      `Percentage: ${Math.floor(
        (this.maths + this.science + this.english) / 3
      )}%`
    );
    return Math.floor((this.maths + this.science + this.english) / 3);
  },
  passOrFail: function() {
    return this.percentage() > 40 ? "You Passed" : "You Failed";
  }
};

PaidCreateUser.prototype = {
  changeName: function(name) {
    this.name = name;
    return this.name;
  },
  languagePercentage: function() {
    console.log(
      `Percentage: ${Math.floor(
        (this.kannada + this.hindi + this.english) / 3
      )}%`
    );
    return Math.floor((this.maths + this.science + this.english) / 3);
  }
};

Object.setPrototypeOf(PaidCreateUser.prototype, CreateUser.prototype);

function CreateUser(name, maths, science, english) {
  this.name = name;
  this.maths = maths;
  this.science = science;
  this.english = english;
}
function PaidCreateUser(name, maths, science, english, kannada, hindi) {
  CreateUser.apply(this, [name, maths, science, english]);
  this.kannada = kannada;
  this.hindi = hindi;
}

// 1. creates a new emply object
// 2. replace the object __proto__ to functions prototype
// 3. return the object (this) implisit

let aswin = new CreateUser("Aswin", 78, 70, 90);
console.group("Aswin");
console.log(aswin.fullMarks());
console.log(aswin.percentage());
console.log(aswin.passOrFail());
console.groupEnd();
let piyush = new PaidCreateUser("Piyush", 78, 98, 90, 80, 78);
console.group("Piyush");
console.log(piyush.fullMarks());
console.log(piyush.percentage());
console.log(piyush.passOrFail());
console.log(piyush.languagePercentage());
console.log(piyush.changeName("Ritik"));
console.log(piyush);
console.groupEnd();

// Class

// class CreateUser {
//   constructor(name, maths, science, english) {
//     this.name = name;
//     this.maths = maths;
//     this.science = science;
//     this.english = english;
//   }
//   fullMarks() {
//     return `Total Marks: ${this.maths + this.science + this.english}`;
//   }
//   percentage() {
//     console.log(
//       `Percentage: ${Math.floor(
//         (this.maths + this.science + this.english) / 3
//       )}%`
//     );
//     return Math.floor((this.maths + this.science + this.english) / 3);
//   }
//   passOrFail() {
//     return this.percentage() > 40 ? "You Passed" : "You Failed";
//   }
// }

// class PaidCreateUser extends CreateUser {
//   constructor(name, maths, science, english, kannada, hindi) {
//     super(name, maths, science, english);
//     this.kannada = kannada;
//     this.hindi = hindi;
//   }
//   languagePercentage() {
//     console.log(
//       `Percentage: ${Math.floor(
//         (this.kannada + this.hindi + this.english) / 3
//       )}%`
//     );
//     return Math.floor((this.maths + this.science + this.english) / 3);
//   }
//   changeName(name) {
//     this.name = name;
//     return this.name;
//   }
// }
// // 1. creates a new emply object
// // 2. replace the object __proto__ to functions prototype
// // 3. return the object (this) implisit

// let aswin = new CreateUser("Aswin", 78, 70, 90);
// console.group("Aswin");
// console.log(aswin.fullMarks());
// console.log(aswin.percentage());
// console.log(aswin.passOrFail());
// console.groupEnd();

// let piyush = new PaidCreateUser("Piyush", 78, 98, 90, 90, 87);
// console.group("Piyush");
// console.log(piyush.fullMarks());
// console.log(piyush.percentage());
// console.log(piyush.passOrFail());
// console.log(piyush.languagePercentage());
// console.log(piyush.changeName("Ritik"));
// console.log(piyush);

// console.groupEnd();
