const {getOnlyTrueValues} = require('./index');

describe('index.js', () => { 
    it("should return only true values", () => {
        expect(getOnlyTrueValues([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
    });
 })