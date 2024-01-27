class Greeter {
    readonly name: string = "world";
   
    constructor(otherName?: string) {
      if (otherName !== undefined) {
        this.name = otherName;
      }
    }
   
    err() {
      this.name = "not ok";
  //Cannot assign to 'name' because it is a read-only property.
    }
  }
  const g = new Greeter();
  g.name = "also not ok";
  //Cannot assign to 'name' because it is a read-only property.

  //Fields may be prefixed with the readonly modifier. 
 // This prevents assignments to the field outside of the constructor.