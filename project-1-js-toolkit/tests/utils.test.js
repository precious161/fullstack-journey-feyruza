const stringUtils= require("../src/stringUtils");
const arrayUtils= require("../src/arrayUtils");
const numericUtils= require("../src/numericUtils");


// ---String Utilities---

describe("Capitalize",()=>{
  test("should throw an error if input is not string",()=>{
    expect(()=>stringUtils.capitalize(2003)).toThrow();
  });
});

describe("toCamelCase",()=>{
  test("should capitalize the first letter of each word except for the first one and remove spaces",()=>{
    expect(stringUtils.toCamelCase("hello world")).toBe("helloWorld");
  });
});

describe("removeExtraSpaces",()=>{
  test("should remove all extra spaces",()=>{
    expect(stringUtils.removeExtraSpaces(" hello  world")).toBe("hello world");
  });
});

describe("isValidEmail",()=>{
  test("should check the validity of emails",()=>{
    expect(stringUtils.isValidEmail(" hello@world")).toBe(false);
  });
});


// ---Array Utiltiies---

describe("findMax",()=>{
  test("should throw for non-array inputs",()=>{
    expect(()=>arrayUtils.findMax(10,5,56)).toThrow();
  });
});

describe("flattenArray",()=>{
  test("should combine multiple arrays into one array",()=>{
    expect(arrayUtils.flattenArray([10,5,[2,4,5],[2,3],56])).toEqual([10,5,2,4,5,2,3,56]);
  });
});

describe("removeDuplicates",()=>{
  test("should remove duplicate items",()=>{
   expect(arrayUtils.removeDuplicates([10,5,5,3,6,10,56])).toEqual([10,5,3,6,56]);
  });
});

// ---Numeric Utilities---

describe("toClamp",()=>{
  test("should return a number to its nearest range",()=>{
    expect(numericUtils.toClamp(6,7,9)).toBe(7);
  });
});

describe("generateRange",()=>{
  test("should returns null if step is 0 and less",()=>{
    expect(numericUtils.generateRange(6,7,0)).toBe(null);
  });
});

describe("checkRange",()=>{
  test("should notify the user whether the inputor is range or not",()=>{
    expect(numericUtils.checkRange(3,7,8)).toBe(false);
  });
});




