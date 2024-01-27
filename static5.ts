static class A {

}

//static modifier cannot appear on a module or namespace element
/*
TypeScript (and JavaScript) don’t have a construct called 
static class the same way as, for example, C# does.

Those constructs only exist because those languages force
 all data and functions to be inside a class; because that 
 restriction doesn’t exist in TypeScript, there’s no need for them.
  A class with only a single instance is typically 
just represented as a normal object in JavaScript/TypeScript.
*/