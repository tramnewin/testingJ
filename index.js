console.log("Refresh on Java")
/* Data types
undefined, null, boolean, string, symbol, number, and object
undefined: may have something that you have not set yet
null: nothing, set sth to nothing
symbol: immutable primitive val that is unique
object: can store a lot of diff key value
of set data to a var, a label to point to a data, easy to manipulate data type
 */
//var myName = "Tr";
//myName = 8;
//let ourName = "sth";
const pi = 3.14;
//var is going to be used throughout the whole prog, let can only be used within the scope you declare that
var a; //declaring
var b; //initializing var or so called assignment and declaring at the same time
a = 7 //assignment
b = a;
console.log(b);
var c = "I am a ";
c = c + "String";
console.log(c);
/* operator
+ - * / % ++ -- += -= *= /=

 */
var ourDecimal = 5.7; //floating point
var myDecimal = 0.1;

var product  = ourDecimal * myDecimal;
console.log(product);

var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
var anotherStr = 'I am a "double quoted" inside';
var anotherWay = `I can "use" this 'inside'`;
console.log(myStr);
console.log(anotherStr);
console.log(anotherWay);

var theLength = myStr.length;
console.log(theLength);

var theIndex;
theIndex = myStr[5];
console.log(theIndex);
/*      CODE OUTPUT
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage run
\t tab
\b backspace
\f form feed
 */

function wordBlanks(Noun, Adjective, Verb, Adverb){
    var result;
    result = Noun + " " + Adjective + " " + Verb + " " + Adverb;
    return result;

}
console.log(wordBlanks("dog", "big", "ran", "quickly"));

var ourArray = ["John", 23];
console.log(ourArray);
var nestedArray = [["the uni", 23],["everything", 101001]];
console.log(nestedArray[0]);
nestedArray[0][0] = 1;
console.log(nestedArray[0]);
ourArray.push("qwrqd");
console.log(ourArray);
ourArray.pop();
console.log(ourArray);
//shift to the left
ourArray.shift();
console.log(ourArray);
ourArray.unshift("Johnathan");
console.log(ourArray);

