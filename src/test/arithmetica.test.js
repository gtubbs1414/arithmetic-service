const { add } = require("../arithmetica")

test('2 + 3 is equal to 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('100 + 100 is 200', () => {
    expect(add(100, 100)).toBe(200);
});


test('250 + 100 is 350', () => {
    expect(add(250, 100)).toBe(350);
});