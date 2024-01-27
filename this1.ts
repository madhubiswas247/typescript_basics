class MyClass {
    name = "MyClass";
    getName() {
      return this.name;
    }
  }
  const c = new MyClass();

  console.log(c.getName());  //MyClass