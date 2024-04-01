console.log("-------------------------String Methods-------------------------");
console.log("1)Length--------------------------------------------------------");

let str = "HASSAAN SAEED";
let length = str.length;
console.log(length);

console.log("\n2)Trim----------------------------------------------------------");

const str0 = "   Saeed   ";
console.log(str0.trim());

console.log("\n3)CharAt--------------------------------------------------------");

let str1 = "Fa21-BSE-038";
let sc = str1.charAt(0);
console.log(sc);

console.log("\n4)CharCodeAt----------------------------------------------------");

const str2 = "Muhammad";
console.log(str2.charCodeAt(0));

console.log("\n5)Concat--------------------------------------------------------");

const str3 = "Hassaan";
console.log(str2.concat(str3));

console.log("\n6)IndexOf-------------------------------------------------------");

console.log(str.indexOf("SAEED"));

console.log("\n7)Substring-----------------------------------------------------");

console.log(str.substring(0, 5));

console.log("\n8)Slice---------------------------------------------------------");

console.log(str.slice(5, 10));

console.log("\n9)ToUpperCase/toLowerCase---------------------------------------");

console.log(str3.toUpperCase());
console.log(str.toLowerCase());

console.log("\n10)Replace------------------------------------------------------");

const str4 = "Hassaan 038";
console.log(str4.replace("Zain", "034"));

console.log("\n11)Split--------------------------------------------------------");

const str5 = "Muhammad,Hassaan,Saeed";
const Name = str5.split(",");
console.log(Name);

console.log("\n12)TrimStart----------------------------------------------------");

const str6 = "   Hassaan";
console.log(str6.trimStart());

console.log("\n13)TrimEnd------------------------------------------------------");

const str7 = "Hassaan   ";
console.log(str7.trimEnd());

console.log("\n14)PadStart-----------------------------------------------------");

const str8 = "038";
console.log(str8.padStart(5, "0"));

console.log("\n15)PadEnd-------------------------------------------------------");

console.log(str8.padEnd(5, "0"));

console.log("\n16)Repeat-------------------------------------------------------");

console.log(str3.repeat(3));

console.log("\n17)ReplaceAll---------------------------------------------------");

const str9 = "Hassaan Hassaan Hassaan";
console.log(str9.replaceAll("Hassaan", "Saeed"));

console.log("\n-------------------------Array Methods--------------------------");
console.log("1)Length--------------------------------------------------------");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);

console.log("\n2)ToString-----------------------------------------------------");

console.log(fruits.toString());

console.log("\n3)AT-----------------------------------------------------------");

console.log(fruits.toString());
let fruit = fruits.at(2);
console.log(fruit);

console.log("\n4)Join---------------------------------------------------------");

console.log(fruits.toString());
console.log(fruits.join(" * "));

console.log("\n5)Delete-------------------------------------------------------");

console.log(fruits.toString());
delete fruits[3];
console.log(fruits.toString());

console.log("\n6)Pop----------------------------------------------------------");

console.log(fruits.toString());
fruits.pop();
console.log(fruits.toString());

console.log("\n7)Push---------------------------------------------------------");

console.log(fruits.toString());
fruits.push("Peach","Grapes");
console.log(fruits.toString());

console.log("\n8)Shift--------------------------------------------------------");

console.log(fruits.toString());
fruits.shift();
console.log(fruits.toString());

console.log("\n9)Unshift------------------------------------------------------");

console.log(fruits.toString());
fruits.unshift("Lemon");
console.log(fruits.toString());

console.log("\n10)Concat------------------------------------------------------");

const Boys = ["Hassaan", "Shahab","Ahmar"];
const Girls = ["Fatima", "Saadia", "Sana"];
//concat method can also be used for three or four orm more arrays to combine them
const Students = Boys.concat(Girls);
console.log(Students);

console.log("\n11)CopyWithin--------------------------------------------------");

console.log(fruits.toString());
fruits.copyWithin(2, 0);
console.log(fruits.toString());

console.log("\n12)Flat--------------------------------------------------------");

const Num = [[1,2],[3,4],[5,6]];
const newNum = Num.flat();
console.log(newNum);

console.log("\n13)Splice------------------------------------------------------");

//splice can be used to add elements, replace elements and remove elements
console.log(fruits.toString());
fruits.splice(2, 0, "Strawberry", "Melon");
console.log(fruits.toString());
fruits.splice(2, 2, "Banana", "Mango");
console.log(fruits.toString());
fruits.splice(0, 2);
console.log(fruits.toString());

console.log("\n14)ToSpliceed--------------------------------------------------");

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(spliced);

console.log("\n15)Slice-------------------------------------------------------");

console.log(fruits.toString());
const citrus = fruits.slice(1);
console.log(citrus);

console.log("\n16)length to append---------------------------------------------");

console.log(fruits.toString());
fruits[fruits.length] = "Kiwi";
console.log(fruits.toString());
