// function favSports(){
//     var mylist=document.getElementById("myList");
//     document.getElementById("favorite").value=mylist.options[mylist.selectedIndex].text;
//     }

// function retirement(retirementAge){
//     var a = ' years left until retiremnt.';
//     return function(yearOfBirth){
//         var age = 2019 - yearOfBirth;
//         console.log((retirementAge-age)+a);
//     }
// }

// var retirementUS = retirement(66);
// var retirementGermany=
// retirement(65);
// retirementIceland=
// retirement(67);


// retirementUS(1990);
// retirementGermany(1990);
// retirementIceland(1990);

// //IIFE
// (function(){
//     var score= Math.random() *10;
//     console.log(score);
// })()

// function interviewQuestion(job){
//     if (job === 'teacher'){
//     return function(name){
//         console.log(name + ' what is it like to be a teacher?');
//     }
// }
//     else if (job === 'driver'){
//         return function(name){
//             console.log(name + ' what is it like to be a driver');
//         }
//     }
//     else if (job === 'chef'){
//         return function(name){
//             console.log(name + ' what is it like to be a chef?');
//         }
// }
// }

// interviewQuestion('teacher')('Amanda');

// teacherQuestion = interviewQuestion('teacher');
// driverQuestion = interviewQuestion('driver');
// chefQuestion = interviewQuestion('chef');

// teacherQuestion('Amanda');
// driverQuestion('Joe');
// chefQuestion('Lisa');

// //*Bind call and apply

// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentaion: function(style, timeOfDay){
//         if (style === 'casual' & timeOfDay === '9'){
//             console.log("G'morning homies. " +
//             "My name is " + this.name + ". I am " + this.age
//             + " and I work as a " + this.job + "." 
//             );
//         }
//         else{
//             console.log("Hello sir or ma\'am." +
//             " My name is " + this.name + ". I am " + this.age
//             + " and I work as a " + this.job + "." );
//         }
//     }
// }

// john.presentaion('casual', '9');

// var emily ={
//     name: 'Emily',
//     age: '30',
//     job: 'designer',
// }

// //call
// john.presentaion.call(emily,'formal','10');

// //apply
// //john.presentaion.apply(emily, ['casual', '9']);

// //bind - used for pre-set patameters
// var johnFriendly=
// john.presentaion.bind(john, 'casual');

// johnFriendly('9');
// johnFriendly('10');

// var emilyFormal = john.presentaion.bind(emily, 'formal');
// emilyFormal('9');

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i = 0; i< arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2019 - el;
}

function isFullAge(limit, el){
    return el>=limit;
}

var ages = arrayCalc(years, calculateAge);

var fullAgeInJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullAgeInJapan);