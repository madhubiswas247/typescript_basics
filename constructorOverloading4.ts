export class MyClass
{
    static fromSingleValue(value : string) : MyClass {
        var result = new MyClass();
        result.value = value;
        return result;
    }

    static fromTwoValues(first : string, second : string) : MyClass {
        var result = new MyClass();
        result.value = first + second;
        return result;
    }

    private value : string;
}

/*
Because of the way constructor overloading works, it can be 
hard to wrangle if you have wildly different constructor
 implementations depending on the parameters. For this reason 
 we use a simple  static factory pattern.
Now we can just call MyClass.fromSingleValue(‘something’) to 
get a class constructed for me. Better yet, any developer 
looking at this will find it extremely easy to follow, even
 if they’ve never used Typescript before.

Where static factories really come into their own is when 
you are consuming an entire other object
Now adding and removing constructors does not break any 
other constructor, and they all act independently from one another.

*/