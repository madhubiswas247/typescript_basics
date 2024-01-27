class A1 {
    private x = 10;
   
    public sameAs(other: A1) {
      // No error
      return other.x === this.x;
    }
  }

  /*
  Cross-instance private access
  Different OOP languages disagree about whether different instances
   of the same class may access each others’ private members.
    While languages like Java, C#, C++, Swift, and PHP allow this, Ruby does not.

TypeScript does allow cross-instance private access:
  */

