// 1. Write a function to find first and last digit of a number.
let n = 589657;
let array = [];
for (let i = 1; n / 10 !== 0; i++) {
    array.push(n % 10);
    n = ~~(n / 10);
}
console.log(`The first digit of a number is ${array.length - 1}`);
console.log(`The first digit of a number is ${array[0]}`);
console.warn('End of first task!');
// 2.  Write a function to reverse the following array (manually and  using .reverse array method )
// input array = [10, 20, 30, 40, 50]
// output array = [50, 40, 30, 20 ,10]
let newArray = [];
let array1 = [10, 20, 30, 40, 50]
function reverse(array1) {
    for (let i = array1.length - 1; i >= 0; i--) {
        newArray.push(array1[i]);
    }
    return newArray;
}
console.log(reverse(array1));
console.warn('Second method:')
let reversed = array1.reverse();
console.log(reversed);
console.warn('End of second task!');
// 3. Write a functions to calculate the perimeter and the area of a square
let a = 5;
function perimeter(a) {
    return 4 * a;
}
console.log(`The perimeter of the square is ${perimeter(a)}`);
function area(a) {
    return Math.pow(a, 2);
}
let P = area(a);
console.log(`The area of the square is ${P}`);
console.warn('End of third task!');

// 4. Write a functions to calculate the perimeter and the area of a rectangle
let x = 5;
let y = 7;
function perimeter2(x, y) {
    return 2 * (x + y);
}
console.log(`The perimeter of the rectangle is ${perimeter2(x, y)}`);
function area2(x, y) {
    return x * y;
}
console.log(`The area of the rectangle is ${area2(x, y)}`);
console.warn('End of fourth task!');

// 5. Write a functions to calculate the perimeter and the area of a circle
let r = 10;
function perimeter3() {
    return Math.round(2 * r * Math.PI);
}
console.log(`The perimeter of the circle is around ${perimeter3()}`);
function area3() {
    return Math.round(Math.pow(r, 2) * Math.PI);
}
console.log(`The area of the circle is around ${area3()}`);
console.warn('End of fifth task!');
// 6. Write a function to return the last n elements from a given array (manually and  using .reverse array method)
// ** n and the array should be parameters in the function
let arr = [1, 8, 9, 2, 5, 8, 9, 6];
n = 2;
let getnth = [];
function get_nth(arr, n) {
    for (let j = (arr.length - 1); j >= (arr.length - n); j--) {       // j=4 j>=3 T   gernth[5]  j=3  j>=3 T...
        getnth.push(arr[j]);
    }
    let rvrsed = getnth.reverse();
    return rvrsed;
}
console.log(get_nth(arr, n));
console.warn('Second method:')
console.log(arr.slice(arr.length - n));



//  function last(arr, n){
//      for(let q=0;q<=(arr.length-n);q++){          
//          arr.shift(arr[q]);
//      }
//      return arr;
//  }
//  console.log(last(arr,n));



