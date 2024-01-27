interface Driveable {
    drive(): void;
  }
  
  class Car implements Driveable {
    drive(): void {
      console.log("Car is driving");
    }
  }
  
  class Truck implements Driveable {
    drive(): void {
      console.log("Truck is driving");
    }
    c(){
        console.log("test");
    }
  }
  
  function goDrive(driveable: Driveable) {
    driveable.drive();
  }
  
  let car:Driveable = new Car();
  let truck:Driveable = new Truck();
  
  goDrive(car); // Prints "Car is driving"
  goDrive(truck); // Prints "Truck is driving"