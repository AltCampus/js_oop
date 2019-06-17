
// 1. Prototypal Pattern
const userMethods = {
    increaseScroe(){
        return ++this.score;
    },
    decreaseScore(){
        return --this.score;
    }
}

function user(name, score){
    let user = Object.create(userMethods);
    user.name = name;
    user.score = score;

    return user;
}

const paidUserMethods = Object.create(userMethods);
paidUserMethods.increaseBalance = function() {
    return ++this.balance;
}

function paidUser(name, score, balance) {
    let paidUser = user(name, score);
    Object.setPrototypeOf(paidUser, paidUserMethods);
    paidUser.balance = balance;
    return paidUser;
}

let me = paidUser('rafi', 13, 99);

// Test Cases
// me.increaseScroe();
// me.increaseScroe();
// me.increaseScroe();
// me.decreaseScore();

// me.increaseBalance();
// me.increaseBalance();
// me.increaseBalance();


// 2. Pseudoclassical Pattern
function User(name, score) {
    this.name = name;
    this.score = score;
}

User.prototype.increaseScroe = function() {
    return ++this.score;
}
User.prototype.decreaseScore = function() {
    return --this.score;
}

function PaidUser(name, score, balance) {
    User.call(this, name, score);
    this.balance = balance;
}

PaidUser.prototype = Object.create(User.prototype);
PaidUser.prototype.increaseBalance = function() {
    return ++this.balance;
}

let you = new PaidUser("sam", 33, 33);

// Test Cases
// you.increaseScroe();
// you.increaseScroe();
// you.increaseScroe();
// you.decreaseScore();

// you.increaseBalance();
// you.increaseBalance();
// you.increaseBalance();

// 3. Classes
class User {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    increaseScroe(){
        return ++this.score;
    }
    decreaseScore(){
        return --this.score;
    }
}

class PaidUser extends User {
    constructor(name, score, balance) {
        super(name, score);
        this.balance = balance;
    }
    increaseBalance(){
        return ++this.balance;
    }
}

const her = new PaidUser("karen", 13, 13)

// Test Cases
// her.increaseBalance();
// her.increaseBalance();
// her.increaseBalance();

// her.increaseScroe();
// her.increaseScroe();
// her.increaseScroe();