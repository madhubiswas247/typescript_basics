class Base {
    greet() {
      console.log("Hello, world!");
    }
  }
   
  class Derived extends Base {
    greet(name?: string) {
      if (name === undefined) {
        super.greet();
      } else {
        console.log(`Hello, ${name.toUpperCase()}`);
      }
    }
  }
   
  const d1 = new Derived();
  d1.greet();
  d1.greet("reader");

  // Alias the derived instance through a base class reference
const b5: Base = d1;
// No problem
b5.greet();

  /*
  A derived class can also override a base class field or property.
   You can use the super. syntax to access base class methods.
    Note that because JavaScript classes are a simple lookup object,
     there is no notion of a “super field”.

TypeScript enforces that a derived class is always a subtype of its base class.
It’s important that a derived class follow its base class contract. Remember
 that it’s very common 
(and always legal!) to refer to a derived class instance through a base class reference
*/