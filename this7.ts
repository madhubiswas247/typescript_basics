class Box8 {
    contents: string = "";
    set(value: string) {
    
  //(method) Box8.set(value: string): this
      this.contents = value;
      return this;
    }
  }

  class ClearableBox extends Box8 {
    clear() {
      this.contents = "";
    }
  }
   
  const a1 = new ClearableBox();
  const b6 = a1.set("hello");
  console.log(b6)  //ClearableBox { contents: 'hello' }

  /*
  In classes, a special type called this refers dynamically 
  to the type of the current class. Let’s see how this is useful:
  */