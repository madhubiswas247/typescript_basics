class StatisClass {
    static x = 0;
    static printX() {
      console.log(StatisClass.x);
    }
  }
  console.log(StatisClass.x);  //0
  StatisClass.printX();  //0

  /*
  Static Members
  
  Classes may have static members. These members aren’t associated with 
  a particular instance of the class. 
  They can be accessed through the class constructor object itself
  */