QUnit.test( "Testing calculateArea function with several sets of inputs", function( assert ){
    var res=myfunction(3);
    assert.equal(res,"9", "Tested with small positive number");
    assert.equal(myfunction(9),"81","Tested with positive number");
    assert.equal(myfunction(6),"36",'Tested the number with wrong result.');
    assert.equal(myfunction(255),"65025",'Tested with large positive number.');
    assert.equal(myfunction(-6),"36",'Tested with negative number value.')
})