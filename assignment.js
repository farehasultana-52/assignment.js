// https://github.com/farehasultana-52/assignment.js

function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
var distanceMeter = kilometerToMeter(10);
console.log(distanceMeter);


function budgetCalculator(watch, mobile, laptop){
    var watchPrice = 50;
    var mobilePrice = 100;
    var laptopPrice = 500;
    var totalPrice = watch * watchPrice + mobile * mobilePrice + laptop * laptopPrice;
    return totalPrice;
}
var total = budgetCalculator(10, 5, 3);
console.log(total);



function hotelCost(days){
var cost = 0;

if (days <= 10){
    cost = days*100;
} else if(days <= 20){
    var firstPart = 10*100;
    var remaining = days-10;
    var secondPart = remaining*80;
    cost = firstPart + secondPart;
} else{
    var firstPart = 10*100;
    var secondPart = 10*80;
    var remaining = days-20;
    var thirdPart = remaining*50;
    cost = firstPart+ secondPart+ thirdPart;
}
  return cost;
}
var count = hotelCost(40);
console.log(count);



function megaFriend(friends){
    var maxWord = friends[0];
    for(var i = 0; i<friends.length; i++){
        var element = friends[i];
        if(element > maxWord){
            maxword = element;
        }
    }
    return element;
}
var result = megaFriend(['fiea','faize','lina','fareha']);
console.log(result);
