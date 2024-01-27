class Greeter {
    public greet() {
      console.log("hi!");
    }
  }
  const g1= new Greeter();
  g1.greet();

  /*
  Because public is already the default visibility modifier, you don’t ever
   need to write it on a class member, but might choose to do so 
   for style/readability reasons.
  */