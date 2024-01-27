namespace studentCalc{  
    export function AnualFeeCalc(feeAmount: number, term: number){  
    return feeAmount * term;  
    }  
}  

/*
The namespace is a way which is used for logical grouping of functionalities.
 It encapsulates the features and objects that share common relationships. 
 It allows us to organize our code in a much cleaner way.

A namespace is also known as internal modules. A namespace can also include interfaces,
 classes, functions, and variables to support a group of related functionalities.
If the namespace is in separate TypeScript file, then it must be referenced by using triple-slash (///) reference syntax.

/// < reference path = "Namespace_FileName.ts" />  
Compile using the --outFile command.
$ tsc --target es6 app.ts --outfile out.js  
$ node ./out.js  

 A namespace can span in multiple files and allow to concatenate each file
  using "-outFile" as they were all defined in one place. It makes the code easier to maintain.

  Unlike JavaScript, namespaces are inbuilt into TypeScript. In JavaScript, the variables declarations go into the global scope.
   If the multiple JavaScript files are used in the same project, then there will be a possibility of confusing new 
   users by overwriting them with a similar name. Hence, the use of TypeScript namespace removes the naming collisions.

*/