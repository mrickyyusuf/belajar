// String method : includes(), startsWith(), endsWith(), indexOf(), slice(), toLowerCase(), toUpperCase(), replace(), replaceAll()

// Handling text in strings
// Declaring string
// can't fill value like this : text, text', 'text
const string1 = "The revolution will not to be televised.";
console.log(string1);
// can reasigning
const badString1 = string1;
console.log(badString1);

// single quote, double quote, backtick : '', "", ``
const single = 'Single quote';
const double = "Double quote";
const backtick = `Backtick`;
console.log(single);
console.log(double);
console.log(backtick);
// can't combine, ex : 'text"

// Embedding javascript : ${}
const name = "Ricky";
const greet = `Hello ${name}, good morning!`;
console.log(greet);

const one = "Hello";
const two = "how are you?";
const  joined = `${one}, ${two}`;
console.log(joined);

// Concatenation using "+"
const name2 = "Bob";
const greeting2 = "Hello";
console.log(greeting2 + ", " + name2);

const name3 = "Sponge";
const greeting3 = "Howdy";
console.log(`${greeting3}, ${name3}`);

// Including expressions in strings
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score ${(score / highestScore) * 100}%.`;
console.log(output);

// Multiline strings
const newLine = `One day you finally knew 
what you had to do, and began.`;
console.log(newLine);

const newLine0 = `One day you finally knew\nwhat you had to do, and began.`;
console.log(newLine0);

// Including quotes in strings
// can't "She said "I think so""
// instead :
const goodQuotes0 = 'She said "I think so!"';
const goodQuotes1 = `She said "I'm not going in there!"`;

// Escaping character
const bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth)

// Numbers vs Strings
const coolBandName = "Front ";
const number = 242;
console.log(coolBandName + number);

// Number()
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);

// String()
const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);

// String methods
// Strings as object
const string0 = "This is my string";

// Finding the length of a string
const browserType = "mozilla";
browserType.length;

// Retrieving a specific string character
browserType[0];
browserType[browserType.length - 1];

// Testing if a string contains a substring with includes(), startsWith(), endsWith()
// includes()
const browserType0 = "mozilla";

if (browserType0.includes("zilla")) {
    console.log("Found zilla");
} else {
    console.log("Not found zilla");
};

// startsWith()
const browserType1 = "mozilla";

if (browserType0.startsWith("zilla")) {
    console.log("Found zilla");
} else {
    console.log("Not found zilla");
};

// endsWith()
const browserType2 = "mozilla";

if (browserType0.endsWith("zilla")) {
    console.log("Found zilla");
} else {
    console.log("Not found zilla");
};

// Finding the position of substring in a string with indexOf(), if string doesn't contain substring then indexOf() returns -1
const tagLine = "MDN - Resources for developers, by developers";
console.log(tagLine.indexOf("developers"));
console.log(tagLine.indexOf("x"));

const firstOccurence = tagLine.indexOf("developers");
const secondOccurence = tagLine.indexOf("developers", firstOccurence + 1);
console.log(firstOccurence);
console.log(secondOccurence);

// Extracting a substring from a string with slice()
const browserType3 = "mozilla";
console.log(browserType3.slice(1, 4));
browserType3.slice(2);

// Changing case with toLoweCase() and toUpperCase()
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

// Updating parts of a string with replace() & replaceAll()
const browserType4 = "mozilla";
const updated = browserType4.replace("moz", "van");

console.log(updated);
console.log(browserType4);
// or do this
let browserType5 = "mozilla";
browserType5 = browserType5.replace("moz", "van");

console.log(browserType5);

// replaceAll()
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote);