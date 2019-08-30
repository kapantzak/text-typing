import { describe, it } from "mocha";
import { assert } from "chai";
import { getSpeed } from "../../src/helpers/speedHelper";

describe("speedHelper", () => {

    describe("getSpeed() of contant speed", () => {
        [
            {
                speed: 0,
                expected: 0
            },
            {
                speed: 1,
                expected: 1
            },
            {
                speed: 100,
                expected: 100
            },
            {
                speed: [100],
                expected: 100
            },
            {
                speed: null,
                expected: 0
            },
            {
                speed: undefined,
                expected: 0
            },
            {
                speed: "not a number",
                expected: 0
            }
        ].forEach(x => {
            it(`Should return ${x.expected} when speed options is ${x.speed}`, () => {
                const actual = getSpeed(x.speed);
                const expected = x.expected;
                assert.equal(actual, expected);
            });        
        });
    });

    describe("getSpeed() of variable speed", () => {

        [
            [0,100],
            [50,60],
            [100,200],
            [1000,2000],
            [3000,10000]
        ].forEach(x => {
            it(`Should return a number between ${x[0]} and ${x[1]}`, () => {
                const actual = getSpeed(x);                
                assert.isTrue(actual >= x[0] && actual <= x[1]);
            })
        });

    });

    describe("getSpeed() of invalid speed ranges", () => {

        [
            {
                speed: [],
                case: "provided with empty array"
            },            
            {
                speed: [null,100],
                case: "the first item is null"
            },
            {
                speed: [100,null],
                case: "the second item is null"
            },
            {
                speed: [undefined,100],
                case: "the first item is undefined"
            },
            {
                speed: [100,undefined],
                case: "the second item is undefined"
            },
            {
                speed: [null,null],
                case: "both items are null"
            },
            {
                speed: [undefined,undefined],
                case: "both items are undefined"
            },  
            {
                speed: ["not a number",200],
                case: "one item is not a number"
            },      
            {
                speed: [100,200,300],
                case: "provided with array of length greater than 2"
            },
        ].forEach(x => {
            it(`Should return 0 when ${x.case}`, () => {
                const actual = getSpeed(x.speed);
                const expected = 0;
                assert.equal(actual, expected);
            })
        });

    });

});