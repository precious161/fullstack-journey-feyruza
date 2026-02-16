const stringUtils= require("./src/stringUtils");
const arrayUtils= require("./src/arrayUtils");
const numericUtils= require("./src/numericUtils");


// ---String Utilities---

console.log("Testing removeExtraSpaces:",stringUtils.removeExtraSpaces("  hello  world"));
console.log("Testing capitalize:",stringUtils.capitalize("  hello  world"));
console.log("Testing toCamelCase:",stringUtils.toCamelCase("  hello  world"));
console.log("Testing toSnakeCase:",stringUtils.toSnakeCase("  hello world"));
console.log("Testing isValidEmail:",stringUtils.isValidEmail("hello@world.com"));

// ---Array Utilities---

console.log("Testing flattenArray :",arrayUtils.flattenArray([3,5,7,[5,6,7,8]]));
console.log("Testing removeDuplicates:",arrayUtils.removeDuplicates(["hello","hello","world",6]));
console.log("Testing findMax:",arrayUtils.findMax([3,5,6,77,8,2]));
console.log("Testing findAverage:",arrayUtils.findAverage([3,5,6,7,8,7]));
console.log("Testing getDiscount:",arrayUtils.getDiscount([{name: "orange",price:50},{name: "banana",price: 110},{name: "Apple",price: 230}]));

// ---Numeric Utilities---

console.log("Testing toClamp:",numericUtils.toClamp(42,5,8));
console.log("Testing generateRange:",numericUtils.generateRange(4,7,2));
console.log("Testing checkRange:",numericUtils.checkRange(7,6,88));