function average(arr){
    var sum = 0;
    arr.forEach(function(element){
        sum += element;
    });
    var avg = sum/arr.length
    return Math.round(avg)
}

console.log("behen k lole")
var scores = [90, 98, 89, 100, 100, 86, 94]
console.log(average(scores))

