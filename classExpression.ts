const someClass = class<Type> {
    content: Type;
    constructor(value: Type) {
      this.content = value;
    }
  };
   
  const m = new someClass("Hello, world");
  console.log(m.content)   //Hello, world

  const m1 = new someClass(1);
  console.log(m1.content)   //1