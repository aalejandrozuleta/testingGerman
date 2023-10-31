const {sum,subtraction,odd,sumOdd,greaterThanZero} = require('./functions.js');

describe('función sum', () => {
    test('Sum', () => { 
        expect(sum(1,2)).toBe(3);
     })
});

describe('funcion subtraction', () => {
    test('Subtraction', () => { 
        expect(subtraction(1,2)).toBe(1);
     })
});


describe('función odd ', () => {
    test('Odd', () => {
        expect(odd(2)).toBe(false);
    })
});

describe('función sum odd', () => {
    test('sum odd array', () => { 
        expect(sumOdd([1,2,3,4,5])).toBe(9);
     })
});

describe('greater than zero', () => {
    test('greater than zero', () => { 
        expect(greaterThanZero(1)).toBe(true);
     })
});

