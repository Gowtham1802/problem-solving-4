
let name1 = "Gowtham";
let name2 = "❤️💙";
let sum = name1+" "+name2;
console.log(sum);


// 1.Write a JavaScript function that counts the number of vowels in each string.

function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vol_count = 0;
  
  for(var i = 0; i < str1.length ; i++)
  {
    if (vowel_list.indexOf(str1[i]) !== -1)
    {
      vol_count += 1;
    }
  
  }
  return vol_count;
}
console.log(vowel_count("Three are Best Friends here Abi, Bala , Gowtham "));



// 2.Create a program that prints the first 10 Fibonacci numbers.

function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    let i = 0;
    for (i = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}
 
console.log("Fibonacci(5): " + fibonacci(5));
console.log("Fibonacci(8): " + fibonacci(8));


// 3.Create a program that checks if a given number is a power of two.


function isPowerOfTwo(n) {
  if (n == 0)
    return false;
  
    return parseInt((Math.ceil((Math.log(n) / Math.log(2)))))
    == parseInt((Math.floor(((Math.log(n) / Math.log(2))))));
    }
  
    // Driver Code
  
    if (isPowerOfTwo(31))
        console.log("Yes");
    else
        console.log("No");
  
    if (isPowerOfTwo(64))
        console.log("Yes");
    else
        console.log("No");


// 4.Create a program that sorts an array of numbers in ascending order.


// Declare and initialize original array
let marks = [12, 25, 31, 23, 75, 81, 100];
 
// Print Before Sorting Array
console.log("Original Array");
console.log(marks);
 
// Call sort function
marks.sort();
 
console.log("After Sorting in Ascending Order");
 
// Print Sorted Numeric Array
console.log(marks);


// 5.Write a function that finds the second smallest element in an array.


let arr = [111, 13, 25, 9, 34, 1];
let n = arr.length;
// sorting the array using
// in-built sort function 
arr.sort();
  
// printing the desired element
document.write("smallest element is "+arr[0],"</br>");
document.write("second smallest element is "+arr[1],"</br>");


// 6.Create a program that checks if a given string is a valid email address.


// 7.Write a JavaScript function to reverse a string.

// Function to reverse string
function ReverseString(str) {
    return str.split('').reverse().join('')
}
 
// Function call
console.log(ReverseString("JavaScript"));


// 8. Write a function to find the GCD (Greatest Common Divisor) of two numbers.



// 9.Write a function that checks if all elements in an array are the same.

let myArr = [1, 1, 1, 1];
const allEqual =
    myArr => myArr.every(v => v === myArr[0]);
 
console.log(allEqual(myArr));


// 10.Create a program that calculates the sum of all multiples of 3 and 5 below 1000.





