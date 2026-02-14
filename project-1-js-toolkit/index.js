let utils= require("./src/utils");

// ---String Utilities---

console.log("Testing removeExtraSpaces:",utils.removeExtraSpaces("  hello  world"));
console.log("Testing capitalize:",utils.capitalize("  hello  world"));
console.log("Testing toCamelCase:",utils.toCamelCase("  hello  world"));
console.log("Testing toSnakeCase:",utils.toSnakeCase("  hello world"));
console.log("Testing isValidEmail:",utils.isValidEmail("hello@world.com"));

// ---Array Utilities---

console.log("Testing flattenArray :",utils.flattenArray([3,5,7,[5,6,7,8]]));
console.log("Testing removeDuplicates:",utils.removeDuplicates(["hello","hello","world",6]));
console.log("Testing findMax:",utils.findMax([3,5,6,77,8,2]));
console.log("Testing findAverage:",utils.findAverage([3,5,6,7,8,7]));
console.log("Testing getDiscount:",utils.getDiscount([{name: "orange",price:50},{name: "banana",price: 110},{name: "Apple",price: 230}]));

// ---Numeric Utilities---

console.log("Testing toClamp:",utils.toClamp(42,5,8));
console.log("Testing generateRange:",utils.generateRange(4,7,2));
console.log("Testing checkRange:",utils.checkRange(7,6,88));