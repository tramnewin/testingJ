function ourResusablefx(){
    console.log("345543");
}
//invoke here
ourResusablefx();
function argumentFx(a, b){
    console.log(a-b);
}
argumentFx(3,2);

//global scope and local scopes applies the same rules as the other languages
var myGlobal = 10;

function func1(){
    oopsGlobal = 5; //no var keyword, within this scope, global
    //BUT IF IT HAS VAR AT THE FRONT, THE IT WOULD BE DECLARED AS A LOCAL VARIABLE
    var thisISlocal = 5;

}

function func2(){
    var output = "";
    if (typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: " + oopsGlobal;

    }
    if (typeof thisISlocal != "undefined"){
        output += " oopsGlobal: " + thisISlocal;

    }
    console.log(output);
}
func1();
func2();

function myLocalScope(){
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();
//console.log(myVar); ERROR: The var is not local


var outerWear = "Tees";
function myOutfit(){
    var outerWear  ="sweater";
    return outerWear;
}
console.log(myOutfit());
console.log(outerWear);

var sum = 0;
function addthree(){
    sum = sum +3;
}

function nextInline(arr, item){
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInline(testArr , 6));
console.log("After: " + JSON.stringify(testArr));


