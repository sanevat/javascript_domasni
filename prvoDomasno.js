//1.Декларирај променливи од сите примитивни  типови


let name='Anna';              //String
let phoneNumber=undefined;   //undefined
let age=27;                 //Number
let employeed=true;        //Boolean
let hobby=null;           //null

//2.Испечати ги соодветно вредностите и типот на променливите

console.log( 'Типот на променливата '+ name+' e:' + typeof(name));
console.log( 'Типот на променливата '+ phoneNumber+' e:' + typeof(phoneNumber));
console.log( 'Типот на променливата '+ age+' e:' + typeof(age));
console.log( 'Типот на променливата '+ employeed+' e:' + typeof(employeed));
console.log( 'Типот на променливата '+ hobby+' e:' + typeof(hobby));

//3.Промени ја вредноста на секоја од променливите

name='Mark';
phoneNumber=38975968325;
age=undefined;
employeed=false;
hobby='drawing';

// 4.креирај константа и пробај да и доделиш вредност што се случува?

//дава error во конзола и кодот престанува да се извршува понатаму, на const може да и се додели само 1 вредност.
const sqrt2=1.4;
// sqrt2=5;

// 5. Декларирај променливи и употреби ги аритметичките оператори (да се испечатат резултатите)

let a,b,c,d,e,f;
a=5;
b=3;
c=6;
d=23.5;
e=50;
f=14;
console.log('Разликата на броевите '+a+' и '+b+' e: '+(a-b));
console.log('Остатокот на делење на бројот '+e+' со бројот '+a+' e:'+e%a);
console.log('2*f/(a+b)= '+(2*f/(a+b)));
console.log('Floor function of '+d+' e: '+ ((d++)-0.5));

// 6. Декларирај променливи и употреби ги операторите за споредба (да се испечатат резултатите)

console.log('Условот: '+a+ ' е поголемо од '+d + ' e: '+(a>d));
console.log('Условот: '+f+ ' е различно од '+name + ' e: '+(f!==name));

// 7. Декларирај променливи и употреби ги логичките оператори (да се испечатат резултатите)

console.log('Условот: a>b && c!==age && f<e  e: '+(a>b && c!==age && f<e) );
console.log('Условот: hobby===a || phoneNumber<d && f<e  e: '+(hobby===a || phoneNumber<d && f<e) );
