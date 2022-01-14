var ourDog = {
    "name": "camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]   //this is an array
}
var theVal = ourDog.legs;

//updating obj properties
ourDog.tails = 3;
//add new properties
ourDog["bark"] = "woof!";
//delete it
delete ourDog.name;

//lookup properties
function phoneLookup(val){
    var result = "";
    var lookup =  {
        "alpha": "adams",
        "bravo": "Boston",
        "delta": "Denver"
    }
    result = lookup[val];
    return result;

}
console.log(phoneLookup("bravo"));

var collection ={
    "2458":{
        "album": "slippery when wet",
        "artist": "Prince",
        "tracks": [
            "let it rock",
            "you give me a reason"
        ]
    },
    "2459":{
        "album": "slippery",
        "artist": "Pr",
        "tracks": [
            "let it be",
            "you give me a name"
        ]
    },
    "2345":{
        "album": " when wet",
        "artist": "princess",
        "tracks": [
            "let rock",
            "you got me a reason"
        ]
    },
    "3545":{
        "artist": "ABBA"
    },
    "7654":{
      "album": "12412"
    }
};
var copyOfCollection = JSON.parse(JSON.stringify(collection));
console.log(copyOfCollection);
function updateRecords(id, prop,value){
    if(value === ""){
        delete collection[id][prop];
    }else if (prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else{
        collection[id][prop] = value;
    }
    return collection;
}
console.log(updateRecords(7654,"artist", "ABBA"));

function checkSign(val){
    return val>0? "positive": val<0? "negative" : "zero";
}

console.log(checkSign(0));
