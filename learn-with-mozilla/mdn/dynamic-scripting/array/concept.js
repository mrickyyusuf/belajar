// Array definition

// Creating array
const myArray0 = [
    "Hello",
    true,
    10,
    "Ricky"
];

// multi-dimensional
const multiDimensionArray = [
    1, 
    2, 
    [0, 10, 99], 
    "test",
    true,
    false,
    [0, "Joseph", true, false]
];

// length
multiDimensionArray.length;

// access 
multiDimensionArray[1];
multiDimensionArray[2][0]; // multi-dimensional access

// modify
multiDimensionArray[1] = "shopping";

// indexOf()
multiDimensionArray.indexOf(true);

// Adding item in last array with push() & in first array with unshift()
    // push()
    let city = ["Manchester", "Liverpool"];
    city.push("Cardiff");
    console.log(city);

    city = ["Jakarta", "Bandung", "Palembang"];
    newCity = city.push("Medan");
    
    // unshift()
    city.unshift("Yogyakarta", "Kalimantan");
    newCity = city.unshift("Surabaya");
    
    // Remove item in last array with pop() & in first array with shift()
    // pop()
    city.pop();
    newCity = city.pop();
    
    // shift()
    city.shift();
    newCity = city.shift();
    
    console.log(city);
    console.log(newCity);

// splice()
let cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
let index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities); // [ "Manchester", "Edinburgh", "Carlisle" ]

let fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 0, "orange"); // start from index 1, remove 0 element, add "orange"
console.log(fruits); // ["apple", "orange", "banana", "cherry"]

// for..of, map(), filter()
    // for..of
    const birds = ["Parrot", "Falcon", "Owl"];
    for (const bird of birds) {
        console.log(bird);
    };

    // map()
    function double(num) {
        return num * 2;
    };

    const numbers = [1, 2, 3, 4, 5, 6];
    const doubled = numbers.map(double);
    console.log(doubled);

    // filter()
    function isLong(ct) {
        return ct.length > 7;
    };

    let longer = city.filter(isLong);
    console.log(longer);


// split(), join(), toString()
    // split()
    let dataString = "hai,nama,ucup,umur,20,rumah,jakarta,hobi,code,mimpi,surga";

    let dataStringVar = dataString.split(",");
    dataStringVar;
    dataStringVar.length;
    dataStringVar[0];
    dataStringVar[1];
    dataStringVar[dataStringVar.length - 1];
    console.log(dataStringVar);

    // join()
    let commaSeparated = dataStringVar.join(",");
    commaSeparated;
    console.log(commaSeparated);

    // toString() -> test in dev console
    let thisIsArray = ["My", "Array", "Test", "To string", "True", "False", true, false, 20];
    thisIsArray.toString();

// Study case, searchInput.value -> open mini-task.html