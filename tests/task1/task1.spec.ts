import { getOldestItem } from "../../src/task1/task1";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {FirstArgument, IsTypeEqual, typeAssert} from '../type-assertions';

type TestItem = {
    age: number,
}

const testItems: TestItem[] = [
    {
        age: 1,
    },
    {
        age: 2,
    },
    {
        age: 3,
    }
];

type TestItem2 = {
    someField: number,
    age: number,
};

const testItems2: TestItem2[] = [
    {
        someField: 234,
        age: 5,
    },
    {
        someField: 123,
        age: 1,
    }
];

describe('task', () => {
    describe('getOldestItem', () => {
        it('should work correct for sample items', () => {
            expect(getOldestItem(testItems)).toStrictEqual({age: 3});
        });

        it('should work for extended type', () => {
            expect(getOldestItem(testItems2)).toStrictEqual({someField: 234, age: 5});
        });

        it('should work correct for empty items', () => {
            expect(getOldestItem([])).toBe(undefined);
        });
    });
});
