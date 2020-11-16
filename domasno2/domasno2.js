// 1. Declare variables and use the assignment operators ( print the results);

let a=15;
let b=0.5;
let c=98;
let d=12;
a+=15;
console.log('Novata vrednost na brojot a e '+ a);
c/=(2+d);
console.log('Novata vrednost na brojot c e '+ c);
c%=a;
console.log('Ostataokot pri delenje na brojot c so a e='+c);

// 2.Try out the two kind of alerts that have been studied;

window.alert('I am an alert box ');
let result=window.confirm('Are you sure you want to leave?');
console.log(result);


//3. Try out the different types of loggings in the console;
console.group('Trying all types of console logging:');
console.error('First error!');
console.table(['book','author', 'pages']);
console.log(['Teodora', '17','Saneva']);
console.log(location);
console.time('script')
setTimeout(()=>{
    console.timeEnd('script');
});
console.dir('hey');
//*bonus
console.warn('This is a warning!')
console.groupEnd;
const spacing='10px';
const styles=`padding: ${spacing};background-color:red;color:black;font-style:italic; border: 1px solid black;`;
console.log('%cHello', styles);
function count_console() { 
    for (i = 0; i < 10; i++) { 
        console.count(); 
    } 
} 
console.info('Informations');

