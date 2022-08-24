/************** 
Let firstName='Nadim',lastName='Bhuyan'. Now write a programe to print 'Mr Nadim Bhuyan' by using mentioned varibales(try to use String literal);
*
*******************/
let firstName = "Nadim";
let lastName = "Bhuiyan";
console.log(`Mr ${firstName} ${lastName}`);

/* ============================================\
    Q10:let n=145;Now print "Yes" if n is divisble by 5 othewise print "NO".
 ==============================================*/
// let n = 145;
// if (n % 5 == 0) {
//     console.log("Yes")
// } else {
//     console.log("Yes")
// }

/*==============================================
 Q11: We can check two string is anagram or not by various way, among them by doing bits operation(use of bitwise operator) we can check it in a simple way where it is efficient in terms of memory and time. Now write the code by using bitwise operator.
note:(two string will be anagram when their length and chracter set is same.example: 'medical' and 'delimal')
 ===============================================*/
 function checkAnagram(s1,s2){
    let h1=0,h2=0;
    let x;
    if(s1.length==s2.length){
        for(let i=0; i<s1.length; i++){
            x=1;
            x=x<<(s1.charCodeAt(i)-97);
            h1=h1|x;
        }
        for(let i=0; i<s2.length; i++){
            x=1;
            x=x<<(s2.charCodeAt(i)-97);
            h2=h2|x;
        }
        if(h1==h2){
            return "Anagram";
        }else{
            return "Not Anagram";
        }
    }else{
        return "Not anagram";
    }
 }
 var b = checkAnagram('medical','decimal');
 console.log(b);
/**==============================================================
 // Q12:Debug below code.
// var n = 20;
// if(n%2==0)
// {
//     let sum = 0;
//     for(let i=0;i<n;i++)
//     {
//         sum = sum+i;
//     }
// }
// console.log(sum);
// A12:
============================================================*/
var n = 20;
let sum = 0;
if(n%2==0)
{
    for(let i=0;i<n;i++)
    {
        sum = sum+i;
    }
}
console.log(sum);
/*_______________________________________________________//
// Q13: Debug below code
// const s = 0;
// var n=120;
// for(const i=0;i<n;i++)
// {
//     $s+=i;
// }
// console.log(sum);
// Answer :
*/
let s = 0;
var n=120;
for(let i=0;i<n;i++)
{
    s+=i;
}
console.log(s);
/* _______________________________________________________//
// Q14: Find Out the problem in below code.
===========================================*/
    let a = 10;
    function f() {
        let b = 9
        if (true) {
            console.log(b);
        }
        console.log(b);
    }
    f();
    console.log(a)
// _______________________________________________________//
// Q15: creat a string variable s and assign it by '5' the create another variable i and assign  it converted value of s to intger .
// Answer:
// const s = '5';
// const i = parseInt(s);
// _______________________________________________________//
// Q16:What will be the result of this mathematical operation? (try it out. Type the code and do not copy paste code from here)

// Var num1 = “78.3”;
// Var num2 = 13;
// console.log(num1+num2);
// ________________________________________________________//
// Q17: See the below code and answer what is the value of arr1[0] at linne 4 and why???
// Note(passing by value happens when passing primitive valriables and passign by reference happens when assigning object). 
let arr1 = [20,23,12,56,36];
let arr2 = arr1;
arr2[0]=133;
console.log(arr1[0]);
// _________________________________________________________//
// Q18: what is value of a in line 4.Note(passing by value happens when passing primitive valriables and passign by reference happens when assigning object).
let aa = 129;
let bb = aa;
bb = bb + 21;
console.log(aa); //What is the output here??
// ____________________________________________________________//
// Q19: Consider the below code.
const  price1 = '99.99';
const  price2 = '49.50';
if(price1 > price2){
    console.log( price1, "Is greater then ", price2)
}else if(price1<price2){
    console.log( price2, "Is greater then ", price1)
}
// Now write a code that will validate variables price1 and price2 as well as print the total price.
// _______________________________________________________________//
// Q20: Consider below code.
let item1 = '21.89';
let item2 = 21.89;
if(item1 != item2)
    console.log('They are not equal');
if(item1==item1)
    console.log('They are equal');
if(item1===item2)
    console.log('They are strictly equal');
// What will be the output?? (try it out. Type the code and do not copy paste code from here)