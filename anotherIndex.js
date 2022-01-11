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
}

function func2(){
    var output = "";
    if (typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: " + oopsGlobal;

    }
    console.log(output);
}
func1();
func2()