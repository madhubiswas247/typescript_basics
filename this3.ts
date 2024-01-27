class MyClass3 {
    name = "mou";
    getName = () => {
      return this.name;
    };
  }
  const c2 = new MyClass3();
  const g = c2.getName;
  // Prints "mou" instead of crashing
  console.log(g());

  /*
  If you have a function that will often be called in a way that loses its this context,
   it can make sense to use an arrow function property instead of a method definition:
  */