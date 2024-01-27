class Box<Type> {
    contents: Type;
    constructor(value: Type) {
      this.contents = value;
    }
  }
   
  const b1 = new Box("hello!");
  const b2 = new Box(1);

  /*
  Classes, much like interfaces, can be generic. When a generic class is 
  instantiated with new, its type parameters are 
  inferred the same way as in a function call.
  Classes can use generic constraints and defaults the same way as interfaces.
  */