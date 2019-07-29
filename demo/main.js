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
