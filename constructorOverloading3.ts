export class MyClass
{
    constructor(value : string)
    constructor(first : string, second? : string)
    {
        if(!second)
        {
            this.value = first;
        }else 
        {
            this.value = first + second;
        }
    }

    private value : string;
}

/*
It get worse (just in my opinion), when you want a differing
 amount of parameters for two different constructors. What you 
 need to instead do is create a single implementation that each 
 constructor can “fall down” to the next without breaking. 
The constructor with a single “value” is able to fall down to
 the second constructor because the second parameter is nullable.
  We can determine which constructor was used by checking if the second value is set or not.

Again, less than ideal. I find the biggest issue is as you
 add constructors, removing one in the “middle” of the list 
 suddenly breaks everything. In my opinion, this way of overloading
  constructors in typescript is extremely brittle and prone to
   giving developers headaches.

*/