export class MyClass
{
    private value : string;
	constructor(value : string | number)
	{
		if(typeof value === "string")
		{
			this.value = value;
		}
		if(typeof value === "number")
		{
			this.value = value.toString();
		}
	}
}

/*
Overloading in Typescript is a little different to what you might expect, 
while you can overload constructors, you cannot have multiple implementations.
 What this means in practice is that you either can create a
  union type such as in above case :
*/