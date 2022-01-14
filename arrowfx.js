import * as somthing from "./index.js"
const testing = () => new Date();

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]));

const increment = (function(){
    return function increment(number, value =1){
        return number + value;
    };
})();
console.log(increment(5,2));
console.log(increment(5));
