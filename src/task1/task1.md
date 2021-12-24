## Цель задания:

Научиться применять дженерики в функциях на практике.

## Что нужно сделать:

Стажер из вашей команды передал вам кусок кода, который нужно доработать. Этот код - реализация важного для нас функционала: поиск “старейшего” элемента в массиве. Старейшего - это про возраст, а не про время добавления в массив. Его код:

```tsx
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

function getOldestPerson(items: Person[]): Person {
    return items.sort((a, b) => b.age - a.age)[0];
}

function getOldestWine(items: Wine[]): Wine {
    return items.sort((a, b) => b.age - a.age)[0];
}

function getOldestBridge(items: Bridge[]): Bridge {
    return items.sort((a, b) => b.age - a.age)[0];
}
```

В этой реализации явно что-то не так. Объекты похожи между собой тем, что имеют поле “age”. Слишком много дублирования кода. Так же стажер-разработчик не удосужился написать тестовых данных для проверки этого функционала.

Вашей задачей будет сделать решение без дублирования кода с использованием дженериков, а так же “замокать”, а если еще правильнее - то “застабать” (см. Stubs vs Mocks [https://martinfowler.com/articles/mocksArentStubs.html](https://martinfowler.com/articles/mocksArentStubs.html) ) тестовые данные для этих функций. Хотя бы по 3 объекта каждого типа.

## **Критерии оценки:**

- **"Зачет":**
  - Реализованный функционал отвечает требованиям задания
  - В реализации не допущены недочеты, связанные с оформлением или использованием дженериков.
  - Отсутствует приведение типов
- **"На доработку":**
  - Не выполнен один из пунктов выше