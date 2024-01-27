export abstract class Base {
  abstract getName(): string;

  printName() {
    console.log("Hello, " + this.getName());
  }
}

const b = new Base();
//Cannot create an instance of an abstract class.

/*
  Classes, methods, and fields in TypeScript may be abstract.
An abstract method or abstract field is one that hasn’t 
had an implementation provided. These members must exist
 inside an abstract class, which cannot be directly instantiated.
The role of abstract classes is to serve as a base class for 
subclasses which do implement all the abstract members. When a class 
doesn’t have any abstract members, it is said to be concrete.
  
We can’t instantiate Base with new because it’s abstract. Instead, 
we need to make a derived class and implement the abstract members:
  */
