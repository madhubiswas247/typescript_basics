class MyClass5 {
    name = "mou";
    getName(this: MyClass5) {
      return this.name;
    }
  }
  const c5 = new MyClass5();
  // OK
  console.log(c5.getName()); //mou

  /*
  TypeScript checks that calling a function with a this parameter is 
  done so with a correct context. Instead of using an arrow function, we can add a this
   parameter to method definitions to statically enforce that the method is called correctly:
  */