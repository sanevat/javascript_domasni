// 1. Write a JavaScript conditional statement to sort three numbers. Print the result.
let a=-6;
let b=15;
let c=-3;
if(a>b && a>c)
{
    if(b>c){
      console.log(a+'>'+b+'>'+c);
    }
    else{
        console.log(a+'>'+c+'>'+b);
    }   
}
else if(b>a && b>c){
    if(a>c){
        console.log(b+'>'+a+'>'+c);
    }
    else{
        console.log(b+'>'+c+'>'+a);
    }
}
else if(c>a && c>b){
    if(a>b){
        console.log(c+'>'+a+'>'+b);
    }
    else{
        console.log(c+'>'+b+'>'+a);
    }
};
//posebna diskusija se pravi(na ist nacin) ako dva od broevite se ednakvi ili site se ednakvi

//2. Write a JavaScript conditional statement to find the largest of five numbers. Print the result.
let m=5;
let n=10;
let p=9;
let q=6;
let r=67;
if(m>(n && p && q && r)){
    console.log('Najgolem e brojot '+ m);
}
else if(n>(m && p && q && r)){
    console.log('Najgolem e brojot '+n);
}
else if(p>(m && n && q && r)){
    console.log('Najgolem e brojot '+p);
}
else if(q>(m && n && p && r)){
    console.log('Najgolem e brojot '+q);
}
else if(r>(m && n && p && q)){
    console.log('Najgolem e brojot '+r);
};

/*3. Compute the average marks of the following students. Then, use the average to determine the corresponding grade. 
Student_Name	Marks
David	        80
Vinoth	        77
Divya	        88
Ishitha	        95
Thomas	        68
*/
 let David=80;
 let Vinoth=77;
 let Divya=88;
 let Ishitha=95;
 let Thomas=68;
 

 //4. For a given hour, print out the corresponding greeting (Good morning, Good afternoon, Good evening).
 let hour=23;
 if(1<=hour && hour<=12){
  console.log('Good morning!');
 }
 else if(12<hour && hour<=17){
    console.log('Good afternoon!');
 }
 else if(17<hour && hour<=24){
    console.log('Good evening!');
 }
if (thisMonth=='December'||thisMonth=='January'||thisMonth=='February'){
    console.log('Its winter')
}if (thisMonth=='December'||thisMonth=='January'||thisMonth=='February'){
    console.log('Its winter')
}


//5. For a given day, print out whether it is a day of the work week or weekend.
let today='Saturday';
if(today=='Monday'|| today=='Tuesday'|| today=='Wednesday'|| today=='Thursday'|| today=='Friday'){
console.log('Its  a day of the work week!');
}
else if(today=='Saturday'|| today=='Sunday'){
    console.log('its the weekend');
}
else{
    console.log('Not a day of the week!');
}


//6. For a given month, print out in which season it belongs.
let thisMonth='March';
if (thisMonth=='December'||thisMonth=='January'||thisMonth=='February'){
    console.log('Its winter');
}
else if (thisMonth=='March'||thisMonth=='April'||thisMonth=='May'){
    console.log('Its spring');
}
else if (thisMonth=='June'||thisMonth=='July'||thisMonth=='August'){
    console.log('Its summer');
}
else if (thisMonth=='September'||thisMonth=='October'||thisMonth=='November'){
    console.log('Its autumn');
}
else{
    console.log('Not a month!');
}
