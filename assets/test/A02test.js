// This file tests our application code - open this file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// To complete this assignment, go to the end of this file, and uncomment the last 5 tests. 

// Refresh.  You will see several failing tests. 

// Modify the code in your appplication (M03.js) to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

QUnit.test('Testing calculate function with several sets of inputs', function (assert) {
    assert.equal(perimeter1(4,3), 14, 'Tested with two relatively small positive numbers');
    assert.throws(function () {perimeter1(-1,-5); }, /Value shouldn't be 0 or negative value!/, 'Passing in netagive value correctly raises an Error');    
    assert.throws(function () {perimeter1(null,null); }, /Value shouldn't be 0 or negative value!/, 'Passing in null correctly raises an Error');
    assert.throws(function () {perimeter1("Test","5"); }, /Value should be a number!/, 'Passing in a string correctly raises an Error');    
});






