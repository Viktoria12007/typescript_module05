type Person = {
    name: string,
    age: number,

}

type Bridge = {
    city: string,
    age: number,

}

type Wine = {
    manufacturer: string,
    age: number,
    grade: string,
}

function getOldestPerson(items: Person[]): Person | undefined {
    return items.sort((a, b) => b.age - a.age)[0];
}

function getOldestWine(items: Wine[]): Wine | undefined {
    return items.sort((a, b) => b.age - a.age)[0];
}

function getOldestBridge(items: Bridge[]): Bridge | undefined {
    return items.sort((a, b) => b.age - a.age)[0];
}

export function getOldestItem() {
    return undefined;
}
