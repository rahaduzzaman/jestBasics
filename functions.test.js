const functions = require('./functions');

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Add 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

test('Add 2 + 2 to NOE equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
});

test('Should Be Null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should Be falsy', () => {
    expect(functions.chechValue(null)).toBeFalsy();
});

test('Should Be Md Rahaduzzaman', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'MD',
        lastName: 'Rahaduzzaman'
    });
});
