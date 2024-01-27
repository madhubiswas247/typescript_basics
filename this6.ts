class Box6 {
    content: string = "";
    sameAs(other: this) {
      return other.content === this.content;
    }
  }

  const gy = new Box6();
  console.log(gy.sameAs(gy))  //true

  const my = new Box6();
  console.log(gy.sameAs(my))  //true

  //You can also use this in a parameter type annotation: