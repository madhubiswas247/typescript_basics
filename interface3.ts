interface A {
    x: number;
    y?: number;
  }
  class C implements A {
    x = 0;
  }
  const c1 = new C();
  c1.y = 10;
  //Property 'y' does not exist on type 'C'.