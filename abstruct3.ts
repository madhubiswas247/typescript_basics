import { Base } from "./abstract1";
function greet(ctor: typeof Base) {
    const instance = new ctor();
 // Cannot create an instance of an abstract class.
    instance.printName();
  }

   /**
   Abstract Construct Signatures
Sometimes you want to accept some class constructor
 function that produces an instance of a class which derives from some abstract class.
   */


  function greet1(ctor: new () => Base) {
    const instance = new ctor();
    instance.printName();
  }
  greet1(Derived);
  greet1(Base);

  /*
  Argument of type 'typeof Base' is not assignable to parameter of type 'new () => Base'.
  Cannot assign an abstract constructor type to a non-abstract constructor type.

  Now TypeScript correctly tells you about which class constructor functions can be invoked 
  - Derived can because it’s concrete, but Base cannot.
  */

 