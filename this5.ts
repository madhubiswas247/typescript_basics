class MyClass6 {
    name = "MyClass";
    getName(this: MyClass6) {
      return this.name;
    }
  }
  const c6 = new MyClass6();
  // OK
  c6.getName();
   
  // Error, would crash
  const g4 = c6.getName;
  console.log(g4());

  //The 'this' context of type 'void' is not assignable to method's 'this' of type 'MyClass'.