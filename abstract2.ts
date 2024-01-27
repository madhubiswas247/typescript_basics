import { Base } from "./abstract1";
class Derived extends Base {
  getName() {
    return "world";
  }
}

const d = new Derived();
d.printName();

class Derived1 extends Base {
  // Non-abstract class 'Derived' does not implement inherited abstract member 'getName' from class 'Base'.
  // forgot to do anything
}
