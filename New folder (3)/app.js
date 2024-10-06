// QUESTION 1
var date = new  Date() ;
console.log(date);
// QUESTION 2
var months  =new Date();
var montharr =["january","February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"];
   var month=(montharr[months.getMonth()]);
alert (month);
// QUESTION 3
 var daysarr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var today = new Date ().getDay() ;                  
alert (daysarr[today]);
// QUESTION 4
var day =new Date ().getDay();
//AS 0 IS SUNDAY AND 6 IS SATURDAY
if(day===0||day===6){
    alert("ITS FUN DAY");
};
// QUESTION 5
var date = new Date().getDate();
if(date<16){
    alert ("first fifteen days");
}
else{
    alert ("last  fifteen days");
}
// QUESTION 6
var date =new Date ();
 var mint=Math.round(date.getTime()/1000*60);
console.log(mint);
// QUESTION 7
const Hour = new Date().getHours();
if (Hour < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}
// QUESTION 8
const laterDate = new Date(2020, 11, 31);
console.log(laterDate);
// QUESTION 9

 var rStart = new Date(2015, 5, 18); //  June is  on index 5
var  date = new Date()
var  Diff = date-rStart  ;
var Pass = Math.floor (Diff / (1000*60*60*24));
alert(Pass);




// QUESTION 11

var  date = new Date();
var  Hours = date.getHours();
 console.log(Hours);
date.setHours(Hours + 1);
console.log(date);
 // QUESTION 12

var dates = new Date();
var  reset= new Date();
reset.setFullYear(dates.getFullYear() - 100);

// Show the date in an alert box
alert(reset);

// QUESTION 13
var age =prompt("enter your age" );
var date = new Date().getFullYear();
var birthyear = date-age 
console.log('your birthyear is ' + birthyear);
// QUESTION 14 

    // Asking for user inputs
    var customerName = prompt("Enter Customer Name:");
    var units = +(prompt("Enter Current Month Number of Units:"));
     var  chargesPerUnit = +(prompt("Enter Charges per Unit:"));
     var latePaymentSurcharge = +(prompt("Enter Late Payment Surcharge:"));

 // Calculate amounts
    var  netAmount = (units * chargesPerUnit).toFixed(2);
    var grossAmount = (parseFloat(netAmount) + latePaymentSurcharge).toFixed(2);

    // Display the bill summary in the console
    console.log("K-Electric Bill Summary:");
    console.log("Customer Name: " + customerName);
    console.log("Current Month Number of Units: " + units);
    console.log("Charges per Unit: " + chargesPerUnit.toFixed(2));
    console.log("Net Amount Payable (within Due Date): " + netAmount);
    console.log("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2));
    console.log("Gross Amount Payable (after Due Date): " + grossAmount);