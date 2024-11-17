//class variable creates variable, same as objects but easier to read.
//object oreinted programming is like a family tree. can add child elements to parent elements using extends. base class is first class made
//extend classes to base class and extends data

class Person {
  constructor(name, age, job) {
    this.name = name;
    this.job = job;
    this.age = age;
  }
  exercise() {
    console.log("Running is fun! - said no one ever");
  }
  //back ticks for interpolation

  fetchJob() {
    console.log(`${this.name} is a ${this.job}`);
  }
}
//extends "adds child element". extends base class
//extension of base class
class Programmer extends Person {
  //created empty array for values to be pushed into
  languages = [];

  busy;
  constructor(name, age, job, languages) {
    //super takes code from above, calls constructor class.jumps up to constructor
    super(name, job, age);
    //push to add empty languages to array
    //3 dots means "copy" aka spread operator
    this.languages.push(...languages);
    //setting busy to true
    this.busy = true;
  }
  completeTask() {
    this.busy = false;
  }
  // \if the programmer is busy, log the name and dont accept task
  acceptNewTask() {
    if (this.busy) {
      console.log(`${this.name} cant accept any new task right now`);
    } else {
      console.log(`${this.name} would love to help with the task`);
    }
  }
  // taking in language and pushing into array
  learnLanguage(language) {
    this.languages.push(language);
  }
  listLanguage(language) {
    return this.languages;
  }
}
//methods are functions inside a class
//new keyword calls constructor function

const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS”, ”Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31, [("HTML", "CSS", "JS", "R")]);
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");
console.log(c1.listLanguage());
console.log(c2.listLanguage());
console.log(c3.listLanguage());
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
person1.exercise();
person1.fetchJob();
