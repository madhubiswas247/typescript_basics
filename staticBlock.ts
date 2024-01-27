class Foo {
    private static count = 0;
 
    getcount() {
        return Foo.count;
    }

    static {
        try {
            const lastInstances = 'hello';
            Foo.count += lastInstances.length;
        }
        catch {}
    }
}

const b5 = new Foo();
console.log(b5.getcount())  //5

/*
Static blocks allow you to write a sequence of 
statements with their own scope that can access private 
fields within the containing class. This means that we can 
write initialization code with all the capabilities of writing statements, 
no leakage of variables, and full access to our class’s internals.
*/