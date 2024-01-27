class Base4 {
    protected x: number = 1;
  }
  class Derived5 extends Base4 {
    protected x: number = 5;
  }
  class Derived6 extends Base4 {
    f1(other: Derived6) {
      other.x = 10;
    }
    f2(other: Base4) {
      other.x = 10;
  //Property 'x' is protected and only accessible through an 
  //instance of class 'Derived2'. This is an instance of class 'Base'.
    }
  }