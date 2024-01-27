class Base {
    k = 4;
  }
   
  class Derived extends Base {
    constructor() {
      // Prints a wrong value in ES5; throws exception in ES6
      //super()
      console.log(this.k);
  //'super' must be called before accessing 'this' in the constructor of a derived class.
      super();
    }
  }

  //Forgetting to call super is an 
  //easy mistake to make in JavaScript, but TypeScript will tell you when it’s necessary.