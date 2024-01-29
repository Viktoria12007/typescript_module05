export class MyArray<T> {
    constructor(public elements?: Array<T>) {}

    isObject(item: unknown): item is object {
        return typeof item === 'object' && item !== null;
    }

    areElementsEqual(index1: number, index2: number): boolean {
        if (Array.isArray(this.elements)) {
            if (typeof this.elements[index1] !== typeof this.elements[index2]) {
                return false;
            } else {
                if (this.isObject(this.elements[index1]) && this.isObject(this.elements[index2])) {
                    if (Object.keys(this.elements[index1] ?? {}).length !== Object.keys(this.elements[index2] ?? {}).length) {
                        return false;
                    } else {
                        for (const [key] of Object.entries(this.elements[index1] ?? {})) {
                            if (key in (this.elements[index2] ?? {}) && (this.elements[index1] ?? {})[key] === (this.elements[index2] ?? {})[key]) {
                                return true;
                            } else {
                                return false;
                            }
                        }
                    }
                } else {
                    return this.elements[index1] === this.elements[index2];
                }
            }

        }
        return false;
    }

    flatten(): T[] {
        let flatArr: T[] = [];
        const expandArray = (arr: T[]) => {
            for (const element of arr) {
                if (Array.isArray(element)) {
                    expandArray(element);
                } else {
                    flatArr = [...flatArr, element];
                }
            }
        }
        if (Array.isArray(this.elements)) {
            expandArray(this.elements);
        }
        return flatArr;
    }
}

// проверка поля elements
const arr = new MyArray<number>([1, 2, 3]);
const arr1 = new MyArray();
console.log(arr.elements);
console.log(arr1.elements);

// проверка метода flatten
const arr2 = new MyArray<unknown>([1, [2, 3], [1, [2, 2, 2]], [1, 2, [3, 3, [1, 2, [1, 2, 3]]]]]);
console.log(arr2.flatten());
console.log(arr2.elements);

// проверка метода areElementsEqual
const arr3 = new MyArray<object>([{ id: 45, data: { age: 72, color: 'red' }}, { id: 45, data: { age: 72, color: 'red', pet: 'dog'}}, { id: 45, data: { age: 72, color: 'red'}, size: 26}]);
console.log(arr3.areElementsEqual(0, 1));
console.log(arr3.areElementsEqual(0, 2));
console.log(arr3.areElementsEqual(0, 22));
console.log(arr3.areElementsEqual(13, 20));
