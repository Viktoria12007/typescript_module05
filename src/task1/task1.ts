type Age = { age: number }

type Extend<U> = U & Age

type Person = {
    name: string,
}

type Bridge = {
    city: string,
}

type Wine = {
    manufacturer: string,
    grade: string,
}

const persons = [{ name: 'Катя', age: 40 }, { name: 'Андрей', age: 27 }, { name: 'Миша', age: 33 }];
const bridges = [{ city: 'Лондон', age: 150 }, { city: 'Рим', age: 200 }, { city: 'Париж', age: 95 }];
const wines = [{ manufacturer: 'Италия', grade: 'Каберне совиньон', age: 11 }, { manufacturer: 'Франция', grade: 'Пино нуар', age: 19 }, { manufacturer: 'Аргентина', grade: 'Зинфандель', age: 5 }];

function getOldestPerson(items: Extend<Person>[]): Extend<Person> | undefined {
    return items.sort((a, b) => b.age - a.age)[0];
}
console.debug(getOldestPerson(persons));

function getOldestWine(items: Extend<Wine>[]): Extend<Wine> | undefined {
    return items.sort((a, b) => b.age - a.age)[0];
}
console.debug(getOldestWine(wines));

function getOldestBridge(items: Extend<Bridge>[]): Extend<Bridge> | undefined {
    return items.sort((a, b) => b.age - a.age)[0];
}
console.debug(getOldestBridge(bridges));

export function getOldestItem<T>(items: Extend<T>[]): Extend<T> | undefined  {
    return items.sort((a, b) => b.age - a.age)[0];
}
console.log(getOldestItem<Wine>(wines));
console.log(getOldestItem<Person>(persons));
console.log(getOldestItem<Bridge>(bridges));
