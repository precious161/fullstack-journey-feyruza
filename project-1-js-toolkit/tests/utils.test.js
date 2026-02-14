const utils=require("../src/utils");

// ---String Utilities---

describe("Capitalize",()=>{
  test("should throw an error if input is not string",()=>{
    expect(()=>utils.capitalize(2003)).toThrow();
  });
});

describe("toCamelCase",()=>{
  test("should capitalize the first letter of each word except for the first one and remove spaces",()=>{
    expect(utils.toCamelCase("hello world")).toBe("helloWorld");
  });
});

describe("removeExtraSpaces",()=>{
  test("should remove all extra spaces",()=>{
    expect(utils.removeExtraSpaces(" hello  world")).toBe("hello world");
  });
});

describe("isValidEmail",()=>{
  test("should check the validity of emails",()=>{
    expect(utils.isValidEmail(" hello@world")).toBe(false);
  });
});


// ---Array Utiltiies---

describe("findMax",()=>{
  test("should throw for non-array inputs",()=>{
    expect(()=>utils.findMax(10,5,56)).toThrow();
  });
});

describe("flattenArray",()=>{
  test("should combine multiple arrays into one array",()=>{
    expect(utils.flattenArray([10,5,[2,4,5],[2,3],56])).toEqual([10,5,2,4,5,2,3,56]);
  });
});

describe("removeDuplicates",()=>{
  test("should remove duplicate items",()=>{
   expect(utils.removeDuplicates([10,5,5,3,6,10,56])).toEqual([10,5,3,6,56]);
  });
});

// ---Numeric Utilities---

describe("toClamp",()=>{
  test("should return a number to its nearest range",()=>{
    expect(utils.toClamp(6,7,9)).toBe(7);
  });
});

describe("generateRange",()=>{
  test("should returns null if step is 0 and less",()=>{
    expect(utils.generateRange(6,7,0)).toBe(null);
  });
});

describe("checkRange",()=>{
  test("should notify the user whether the inputor is range or not",()=>{
    expect(utils.checkRange(3,7,8)).toBe(false);
  });
});




