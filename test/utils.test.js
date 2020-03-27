const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });

  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });
});

describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });
});

describe("utils.getHalfPrice", () => {
  test("returns 10 when passed 20", () => {
    expect(utils.getHalfPrice(20)).toBe(10);
  });
});

describe("utils.countBooks", () => {
  test("return total number of books", () => {
    expect(utils.countBooks(["1", "2", "3"])).toBe(3);
  });
}); 

describe("utils.isInStock", () =>{
  test("returns true if the title is in stock", () => {
  const book = {
    title: "The Stone Diaries",
    author: "Carol Shields",
    yearOfPublication: 1993,
    quantity: 9
  };

  expect(utils.isInStock(book)).toBe(true);
});
});

describe("utils.isInStock", () =>{
  test("returns true if the title is in stock", () => {
  const book = {
    title: "Atonement",
    author: "Ian McEwan",
    yearOfPublication: 1998,
    quantity: 0
  };

  expect(utils.isInStock(book)).toBe(false);
});
});

describe("getTotalOrderPrice", () => {
  test("multiply the price of book, by the quantity ordered, and return this price with 20% VAT added on", () => {
    expect(utils.getTotalOrderPrice(10, 2)).toBe(24);
  });
}); 
