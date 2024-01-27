class Dog {  
    sound = "barking";  
}  
class Lion {  
    sound = "roaring";  
}  
class Goat {  
    sound = "bleat";  
    swim(){  
        console.log("Cannot Swim!");  
    }  
}  
let lion: Lion = new Dog(); // substitutes  
let dog: Dog = new Lion(); // substitutes  
let lionTwo: Lion = new Goat();  
//let goat: Goat = new Lion(); // IDE & compiler error  
console.log("Lion Sound: "+lion.sound);  
console.log("Dog sound: "+dog.sound);  
console.log("Lion sound: "+lionTwo.sound);  

/*
In the above example, we can see that it does not allow substitution of a Lion for a Goat 
because the Goat class has an additional method (so Lion fails duck typing). Dog and Lion are
 substitutable in duck typing because there's nothing a lion can do that a dog cannot, and vice versa

 his method is used to compare two objects by determining whether they have the same
  type of matching names or not. It means we can't change a variable's signature.

  If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck

  the duck-typing feature ensures type safety. As a result of the duck-typing rule, the TypeScript
   compiler verifies that two objects are identical. 
*/