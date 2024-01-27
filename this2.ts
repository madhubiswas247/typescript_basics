class MyClass1 {
    name = "MyClass";
    getName() {
      return this.name;
    }
  }
  const c1 = new MyClass1();
  const obj = {
    name: "obj",
    getName: c1.getName,
  };
   
  // Prints "obj", not "MyClass"
  console.log(obj.getName());

  /*
  Long story short, by default, the value of this inside a 
  function depends on how the function was called. In this example,
   because the function was called through the obj reference, its value
    of this was obj rather than the class instance.

This is rarely what you want to happen! TypeScript provides some ways 
to mitigate or prevent this kind of error(Arrow functions).
  */