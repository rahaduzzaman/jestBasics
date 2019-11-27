const functions = require("./functions");

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test("Add 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});
//toBe
test("Add 2 + 2 to NOE equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});
//isNull
test("Should Be Null", () => {
  expect(functions.isNull()).toBeNull();
});
//CheckValue
test("Should Be falsy", () => {
  expect(functions.chechValue(null)).toBeFalsy();
});
// ToEqual
test("Should Be Md Rahaduzzaman", () => {
  expect(functions.createUser()).toEqual({
    firstName: "MD",
    lastName: "Rahaduzzaman"
  });
});
// Less Than and Greater Than
test("Should Be under or Equal 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});
//Regular Expression
test("There is no I in Team", () => {
  expect("Team").not.toMatch(/I/i);
});
// Arrays
test("Admin should be in usernames", () => {
  usernames = ["john", " mark", "admin"];
  expect(usernames).toContain("admin");
});

// Working with async data

//Promise
// test("user fetch name should be Leanne Graham", () => {
//   expect.assertions(1);
//   return functions.fetchUser().then(data => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });
//async
test("user fetch name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
