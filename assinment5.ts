
//1-Write a program that uses filter to remove all negative numbers from an array of numbers
var arry:number[]=[1,2,3,-4,-5,6,-8];
var postiveNum:number[] = arry.filter((elemnt:number) => elemnt>0 );
console.log(postiveNum);

//2-Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where
//each number is multiplied by 2.
 var num:number[]=[1,2,3,4,5];
 var num2:number[]= num.map((ele:number) => ele*2)
 console.log(num2);
 /*3-Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter
 method to create a new array containing only the fruits with more than 5 characters.*/
var aryString:string[] = ["aplle", "banana", "cherry", "date", "grape"];
var filterArry:string[]= aryString.filter((fil:string)=> fil.length>5);
console.log(filterArry);

/*Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods
 together to create a new array containing the squares of even numbers.*/
 var num3:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 var even:number[] = num3.filter((ev:number)=> ev%2==0);
 even = even.map((sdt:number)=> sdt*sdt);
 console.log(even);
/*4-Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to 
create a new array where each temperature is converted to Fahrenheit using the formula
 (Celsius * 9/5) + 32.*/
var celsius:number[]=[0,10,20,30,40];
var fahrenheit:number[]= celsius.map((cell:number)=> cell *9/5 +32);
console.log(fahrenheit);


/*5-Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together
 to create a new array containing the doubled values of odd numbers.*/
var numbers:number[]=[3,6,9,12,15,18];
var douBle:number[]= numbers.filter((dob:number)=> dob%2!==0)
douBle=douBle.map((nom)=> nom*nom)
console.log(douBle);
/*Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach
 method to log each name with an exclamation mark at the end, e.g., "Alice!".*/

var name1:string[]=["Alice", "Bob", "Charlie", "David", "Emily"];
var name2= name1.forEach(function(curnt){
    console.log(`${curnt}!`);
    
})