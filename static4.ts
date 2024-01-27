class S {
    static name = "S!";
  }

  class S2 {
    static name1 = "S!";
  }

  //Static property 'name' conflicts with built-in property 
 // 'Function.name' of constructor function 'S'.


 /*
 It’s generally not safe/possible to overwrite properties from 
 the Function prototype. Because classes are themselves functions
  that can be invoked with new, certain static names can’t be used.
  Function properties like name, length, and call aren’t valid to 
  define as static members:
 */
