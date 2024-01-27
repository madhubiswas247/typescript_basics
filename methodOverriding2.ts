class Base1 {
    greet() {
      console.log("Hello, world!");
    }
  }
   //What if Derived didn’t follow Base’s contract?
  class Derived1 extends Base1 {
    // Make this parameter required
    greet(name: string) {
//   Property 'greet' in type 'Derived' is not assignable to the same property in base type 'Base'.
//     Type '(name: string) => void' is not assignable to type '() => void'.
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }