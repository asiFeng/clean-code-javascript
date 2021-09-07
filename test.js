function testArgsFunc(){
    console.log( 'arguments:', arguments );
    console.log( arguments.length );
}

testArgsFunc(1,2,3);



let testObj = {
    'A': 'a',
    'B': 'b',
    'C': 'c'
};

for( let i in testObj ) {
    console.log(i, testObj[i]);
}