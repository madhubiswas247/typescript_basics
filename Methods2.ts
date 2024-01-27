let x: number = 0;
 
class C {
  x: string = "hello";
 
  m() {
    // This is trying to modify 'x' from line 1, not the class property
    x = "world";
//Type 'string' is not assignable to type 'number'.
//An unqualified name in a method body will always refer to something in the enclosing scope
  }
}
