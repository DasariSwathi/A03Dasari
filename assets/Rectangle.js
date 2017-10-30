function recPerimeter()
{
var l= parseInt(document.getElementById("length").value);
var b=parseInt(document.getElementById("breadth").value);
let perimeter = perimeter1(l,b);
$("#perimeter").html("Perimeter is: "+perimeter);

}
function perimeter1(l,b)
{
    if(l == "" && b == "") 
        {

        alert("Please enter values. It shouldn't be blank!")
        throw Error ("Please enter values. It shouldn't be blank!");
        }

    if(isNaN(l) || isNaN(b)) 
        {
    
        alert("Value should be a number!")
        throw Error ("Value should be a number!");
        }
    if(l <=0 || b <=0) 
        {
            alert("Value shouldn't be 0 or negative value!")
        throw Error ("Value shouldn't be 0 or negative value!");
}
    let result=2 * (l + b);
    return result;
}