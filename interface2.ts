interface Checkable {
    check(name: string): boolean;
  }
  class NameChecker implements Checkable {
    check(s) {
      return s.toLowerCase() === "ok";     
    }
  }
  const c = new NameChecker();
  let a = c.check('Hiiii')
  console.log(a)  //false