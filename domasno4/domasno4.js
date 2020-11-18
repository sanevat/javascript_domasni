//1. Create person object with properties firstName and lastName and add coresponding values.
let person1 = {
    firstName: 'Teodora',
    lastName: 'Saneva'
};
//2. Print the values of the properties of the object. Use both approaches.
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1['firstName']);
console.log(person1['lastName']);
// 3. Print the whole firstName and lastName of the person.
console.log(person1.firstName + ' ' + person1.lastName);
// 4. Add the property age and coresponding value to the person object. Use both approaches.
person1.age = 17;
person1['age'] = 17;
// 5. Print how old the person is.
console.log('The person is ' + person1.age + ' years old.');
// 6. Find the type of the variable person.
console.log('The type of the variable person is :' + typeof (person1))
// 7. Create another person object. Populate the object with coresponding values.
let person2 = {
    firstName: 'Morgan',
    lastName: 'Freeman',
    age: 83
};
// 8. Find out which person is older.
if (person1.age > person2.age)
    console.log(person.firstName + ' is older than ' + person2.firstName);
else if (person1.age == person2.age)
    console.log(person1.firstName + ' is the same age as ' + person2.firstName)
else
    console.log(person2.firstName + ' is older than ' + person1.firstName);
// 9. Find out how many years the person1 is older/younger from person2.
let razlika;
if (person1.age > person2.age) {
    razlika = person1.age - person2.age;
    console.log(person1.firstName + ' is ' + razlika + ' older than ' + person2.firstName);
}
else if (person1.age == person2.age) {
    razlika = person1.age - person2.age;
    console.log(person1.firstName + ' is the same age as ' + person2.firstName)
}
else {
    razlika = person2.age - person1.age;
    console.log(person2.firstName + ' is ' + razlika + ' years older than ' + person1.firstName);
}
// 10. Create another person object. Populate the object with coresponding values.
let person3 = {
    firstName: 'Elizabeth',
    lastName: 'Miller',
    age: 23
}
// 11. Find the sum of the years of the people.
let sum;
sum = person1.age + person2.age + person3.age;
console.log('The sum of the years of the people is ' + sum);
// 12. Find the average of the years of the people.
let average;
average = (person1.age + person2.age + person3.age) / 3;
console.log('The average of the years of the people is' + average);
// 13. Find out who is the youngest of all three people.

if (person1.age < (person2.age && person3.age))
    console.log(person1.firstName + ' is the youngest');
else if (person2.age < (person1.age && person3.age))
    console.log(person2.firstName + ' is the youngest');
else if (person3.age < (person2.age && person1.age))
    console.log(person3.firstName + ' is the youngest');
else {
    if (person1.age == person2.age && person2.age != person3.age && person1.age < person3.age)
        console.log(person1.firstName + ' and ' + person2.firstName + ' are the youngest');
    else if (person1.age == person2.age && person2.age != person3.age && person1.age > person3.age)
        console.log(person3.firstName + ' is the youngest');
    if (person1.age == person3.age && person1.age != person2.age && person1.age < person2.age)
        console.log(person1.firstName + ' and ' + person3.firstName + ' are the youngest');
    else if (person1.age == person3.age && person1.age != person2.age && person1.age > person2.age)
        console.log(person2.firstName + ' is the youngest');
    if (person2.age == person3.age && person2.age != person1.age && person2.age < person1.age)
        console.log(person2.firstName + ' and ' + person3.firstName + ' are the youngest');
    else if (person2.age == person3.age && person2.age != person1.age && person2.age > person1.age)
        console.log(person1.firstName + ' is the youngest');
    else if (person1.age == person2.age && person2.age == person3.age)
        console.log(person1.firstName + ' ' + person2.firstName + ' ' + person3.firstName + ' are all the same age');
};
