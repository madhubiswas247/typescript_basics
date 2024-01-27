class Point1 {
    x = 10;
    y = 10;
   
    scale(n: number): void {
      this.x *= n;
      this.y *= n;
    }
  }

  /*
  A function property on a class is called a method. 
  Methods can use all the same type annotations as functions and constructors:
  Other than the standard type annotations, TypeScript 
  doesn’t add anything else new to methods.

Note that inside a method body, it is still mandatory to 
access fields and other methods via this.
  */