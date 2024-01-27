declare const loggedInUsername: string;
 
const users = [
  { name: "Oby", age: 12 },
  { name: "Heera", age: 32 },
];
 
const loggedInUser = users.find((u) => u.name === loggedInUsername);
console.log(loggedInUser.age);

/*
When strictNullChecks is false, null and undefined are
 effectively ignored by the language. This can lead to unexpected errors at runtime.
 For example with this TypeScript code, users.find has no guarantee that it will 
 actually find a user, but you can write code as though it will:

 When strictNullChecks is true, null and undefined have their own distinct types and you’ll 
 get a type error if you try to use them where a concrete value is expected.
 Setting strictNullChecks to true will raise an error that you have not made 
 a guarantee that the loggedInUser exists before trying to use it.

 // When strictNullChecks: true
type Array = {
  find(predicate: (value: any, index: number) => boolean): S | undefined;
};
// When strictNullChecks: false the undefined is removed from the type system,
// allowing you to write code which assumes it always found a result
type Array = {
  find(predicate: (value: any, index: number) => boolean): S;
};
*/