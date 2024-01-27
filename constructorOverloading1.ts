export class MyClass
{
	constructor(value : string)
	{
		this.value = value;
	}
	
	constructor(value : number)
	{
		this.value = value.toString();
	}

	private value : string;
}

/**
 Overloading in Typescript is a little different to what 
 you might expect, while you can overload constructors, 
 you cannot have multiple implementations.
 */