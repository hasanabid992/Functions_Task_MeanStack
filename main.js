/// -- Task no 1 ---///
let block = (name) => {
    name = 'Hasan'
    console.log(name);
}
block();

///-- Task no 2 : Date & Time --///

let date_time = () => {
    let date = new Date();
    console.log(Date());
}
date_time();


///---Task 3 JS Coding below ---////

let greeting = () => {
   
    let fname = document.getElementById('fname').value;
    let lastname = document.getElementById('lastname').value;
    console.log('Salam '+ ' ' + fname + ' ' + lastname + ' How are you');
}

///-Task no 4 ---/////
let sum = () => {
   
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = (Number(num1) + Number(num2));
    console.log('Result is : '+ result);

}

///-- Task no  5 Calculator ---////

let cal = () =>{
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let select = document.getElementById('select').value;
    let add = document.getElementById('add').value;
    let sub = document.getElementById('sub').value;
    let Mul = document.getElementById('Mul').value;
    let div = document.getElementById('div').value;

    let res_add = Number(number1) + Number(number2);
    let res_sub = Number(number1) - Number(number2);
    let res_mul  = Number(number1) * Number(number2);
    let res_div = Number(number1) / Number(number2);
    
    if(select === add)
        {      
            console.log(res_add);
        }
        else if (select === sub){
            console.log(res_sub);
        }
        else if (select === Mul)
        {
            console.log(res_mul);
        }
        else if (select === div)
        {
            console.log(res_div);
        }
        else {
            console.log('Invalid command');
        }
}


/ Task 6 Square Finder----////
let sqr = (a,b) => {
   a=+prompt('Enter first number');
   b=+prompt('Enter Second number');
    let sqaureofa = a*a;
    let sqaureofb = b*b;
    console.log("Square of "+ a + ' : ' +sqaureofa);
    console.log( "Square of "+ b + ' : '  +sqaureofb);
}
sqr()


///-- Task 7 Factorial Generator ---///
let fact = () => {
let i, no, f;
f=1;
no=Number(document.getElementById("num").value);
for(i=1; i<=no; i++)  
{
f= f*i;
}  
console.log(f);
}


/// -- Task 9--- Pythagoras theorem /// 

let rightangle = () => {
    
    let base = document.getElementById('base').value;
    let per = document.getElementById('per').value;

      let show = () => {
          
         let hyp =  Number(base*base)+Number(per*per); 
         console.log(hyp);
    }
    show();
} 

//--- Task 10 finding the length of string or number ---/////

let argument = (a) =>{
     a="Syed Hasan Abid";
     console.log("Length of" + ' ' +a.length);
}
argument()


//--- Task 12 Area of Rectangle---/// 
let areaofrect = (height,width )=> {
    console.log ("Area of Rectangle"+' : '+height*width);
}

areaofrect(2,3);


//---Task 13 Sorting array--/// 

let sor = () => {
    let arr = ['Html','CSS','Jquery','Javascript','React'];
    return console.log(arr.sort());

}
sor();
/// -Task 14 Sum of array elements--///
let red = () =>{
var addition = [1, 2, 3,5,67,7,76,43,5].reduce((a, b) => a + b, 0);
console.log('Sum of all array elements are'+ ' : '+addition);
}

red();


//s Task 15 Below program return function alert in result ---///
   
  var param = function inner() { return typeof inner; } 
   alert(param()); 


/// Task 16 Cube Finder----////

let cube = (a,b) => {
   a=+prompt('Enter first number');
   b=+prompt('Enter Second number');
    let sqaureofa = a*a*a;
    let sqaureofb = b*b*b;
    console.log("Cube of "+ a + ' : ' +sqaureofa);
    console.log( "Cube of "+ b + ' : '  +sqaureofb);
}
cube()




//-- Task no 17 ---////\

function dice() {
    var diceValue = document.getElementById("diceValue")
    var randomDiceValue = Math.floor(6 * Math.random()) + 1;
    diceValue.innerHTML = randomDiceValue
    // console.log(diceValue)
}



//-- Task no 18 ---////\

function reverseNumber() {
    var num = document.getElementById("numberInput").value
    var resultNum = document.getElementById("result")

    var stringNum = num.toString();
    var reverseNum = stringNum.split("").reverse().join("");
    var result = Number(reverseNum);
    resultNum.innerHTML = result
    console.log(result);
}



// -- Task no 19 ---////\
function checkPallindrome() {
    var stringInp = document.getElementById("stringInp").value
    var invertedString = stringInp.split("").reverse().join("");
    if (stringInp === invertedString)
        alert("the word is pallindrome")
    else
        alert("it is not pallindrome")
}














//-- Task no 20 ---////\
//Task 20 mein masla hai hoga ese hee 

//           /\w\S*/g      
// ye cheez regular expression hai 
// w means word search krna 
// S* means sentence ka pehle pehle word uthana
//g means global search krna
// is ko or search kr le or dekh le hoga ese hee but ho nh ra pata nh q

// function capitalEachWord() {
//     var userInput = 'the quick brown fox';
//     userInput.replace(/\w\S*/g, (updatedTxt) => {
//         // console.log(updatedTxt)
//         return updatedTxt.charAt(0).toUpperCase() + updatedTxt.substr(1).toLowerCase();
//     })
//     console.log(userInput)
// }
// capitalEachWord()



//-- Task no 21 ---////\

function longestWord() {
    var wordInp = document.getElementById("wordInp").value
    var resultWord = document.getElementById("resultWord")
    var splitted = wordInp.split(" ");
    var longest = 0;
    var word = null;

    splitted.forEach(function (resultString) {
        if (longest < resultString.length) {
            longest = resultString.length;
            word = resultString;
        }
    });
    resultWord.innerHTML = word
    return word;
}


///--- Task no 22 --//
let vowel = (vo) =>{

    vo = document.getElementById('vo').value;
    console.log(vo);
    var n = vo.length;
    console.log(n);

    var c = 0;
    for (i = 0; i < n; i++) {
      if ((vo[i] == "a") || (vo[i] == "e") || (vo[i] == "i") || (vo[i] == "o") || (vo[i] == "u")) {
        console.log(vo[i]); 
        c += 1;
      }
      else {
          alert('Invalid Command');
      }
    }
}

//--- Task no 23 -- /// 

let type = (a,b,c,d) => {

        a=typeof('Syed Hasan Abid');
        b=typeof(1134);
        c=typeof(true); 
        console.log(a +':'+':'+b + ':' + c +':'+d);
}
 type();

 //--- Task no 24 ---///

 let  UniqueChar = (string) =>  
 {
    var newString = ""
    for (var i = 0; string.length > i; i++) {
        if (!newString.includes(string.charAt(i))) {
             newString += string.charAt(i);
        }
    }
    return newString;
}

console.log(UniqueChar("thequickbrownfoxjumpsoverthelazydog"));

//--- Task no 25 ---///

function char(str, letter) 
{
 let letter_Count = 0;
 for (let position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char('Syed Hasan Abid', 'a'));


////--Task no 26 ---//// 

let calculate_age = (birthyear,currentyear) => {
       
    birthyear = document.getElementById('birth').value;
    var d = new Date();
    currentyear = d.getFullYear();

    result_age = ((currentyear-birthyear));

   console.log('Your Year of Birth might be :'+Math.round(result_age));
    
}

//--- Task 27 ---////

let lifetime_supply = (myage,age_limit,drink_orange_juice,total,result) => {

    myage = document.getElementById('age').value;
    age_limit = 100;
    drink_orange_juice = document.getElementById('Drink').value;
    total=((Math.round(drink_orange_juice)*365)*(age_limit-myage));

    console.log ('You need' + ' ' + total + ' '  + 'more to last you to 100 years old');
}


//--- Task 28 --///

let Geometry = () => {
    let circumference = () =>
    {
           var pi = 3.142;
           var radius = document.getElementById('rad').value;
           var circum = (2*pi*radius);
           console.log('Circumference : ' +Number(circum));
    }
    circumference();

    let cal_area = (area) => {
          
          this.pi = 3.142;
          radius = document.getElementById('rad').value;
          area = (this.pi*this.radius*this.radius);
          console.log('Area : '+ Number(area));
    }
    cal_area();
}
  
//--- Task 29 ---////
 
let Temperature_Converter = () => {
    let ctof = (cel,result) => { 
         
        feh = document.getElementById('temp').value;
        cel = (feh-32)*5/9;

        console.log('Temperature in Celsius is : ' + cel);
    }
    ctof();

    let ftoc = (cel,result) => { 
        temp1 =document.getElementById('temp1').value;
        result = (cel*9/5+32);
        console.log('Temperature in Fahrenheit is : '+temp1);
    }
    ftoc();
   


} 



////---- End of All Task ----/////
////--- Thank you :) --/////





