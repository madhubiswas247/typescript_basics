class MySafe {
    private secretKey = 12345;
  }
   
  const s = new MySafe();
   
  // Not allowed during type checking
  console.log(s.secretKey);
  //Property 'secretKey' is private and only accessible within class 'MySafe'.
   
  // OK
  console.log(s["secretKey"]);

  /*
  private also allows access using bracket notation 
  during type checking. This makes private-declared 
  fields potentially easier to access for things like unit tests,
   with the drawback that these fields are soft private and don’t strictly enforce privacy.

  Unlike TypeScripts’s private, JavaScript’s private fields (#)
   remain private after compilation and do not provide the previously 
  mentioned escape hatches like bracket notation access, making them hard private.
  */