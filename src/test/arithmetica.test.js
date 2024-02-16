const { add } = require("../arithmetica")

test('2 + 3 is equal to 5', () => {
    expect(add(2,3)).toBe(5);
});

test('2099999999999999999 + 30000000000000 is equal to 2100030000000000000', () => {
    expect(add(2099999999999999999, 30000000000000)).toBe(2100030000000000000);
});

test('500 + 1050 is 5', () =>{
    expect(add(500, 1050)).toBe(1550)
});