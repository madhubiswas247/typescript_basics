class StaticClass3 {
    static getGreeting() {
      return "Hello world";
    }
  }
  class Derived3 extends StaticClass3 {
    myGreeting = Derived3.getGreeting;
  }

  //Static members are also inherited: