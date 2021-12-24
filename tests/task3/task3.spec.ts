import { MyArray } from "../../src/task3/task3";

describe('task', () => {
    it('can initialize with data', () => {
        const arr = new MyArray<number>([1, 2, 3]);
        expect(arr.elements).toStrictEqual([1, 2, 3]);
    });

    it('can initialize without data', () => {
        const arr = new MyArray();
        expect(arr.elements).toStrictEqual([]);
    });

    describe('methods', () => {
        it('push should work', () => {
            const arr = new MyArray([1, 2]);
            arr.push(3);
            expect(arr.elements).toStrictEqual([1, 2, 3]);
        });

        it('slice should return correct items', () => {
            const arr = new MyArray([1, 2, 3]);

            const slice = arr.slice(0, 2);

            expect(slice.elements).toStrictEqual([1, 2]);
        });

        it('slice should return not same object', () => {
            const arr = new MyArray([1, 2, 3]);

            const slice = arr.slice(0, 2);

            expect(arr === slice).toBe(false);
        });

        it('slice should not modify array', () => {
            const arr = new MyArray([1, 2, 3]);

            arr.slice(0, 2);

            expect(arr.elements).toStrictEqual([1, 2, 3]);
        });

        it('concat should work', () => {
            const arr = new MyArray([1, 2, 3]);

            expect(arr.concat([1, 2]).elements).toStrictEqual([1, 2, 3, 1, 2])
        });

        it('concat should not modify array', () => {
            const arr = new MyArray([1, 2, 3]);

            arr.concat([1, 2]);
            expect(arr.elements).toStrictEqual([1, 2, 3]);
        });

        it('areElementsEqual', () => {
            expect('tests are not ready').toBe('tests are not ready');
        });

        it('flatten', () => {
            expect('tests are not ready').toBe('tests are not ready');
        })
    });
});
