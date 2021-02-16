import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './Hello';

ReactDOM.render(<Hello />, document.getElementById('react__root'))



// 1. Работа с простыми типами
// Напишите тип функции, конкатенирующей две строки
// concat('Hello ', 'World') // -> Hello World;

function concat (a: string, b: string) :string {
    return a + b
}

console.log(concat('Hellow ', 'World'))

// 2. Работа с интерфейсами
// Напишите интерфейс для описания следующих данных
// const MyHometask = {
//     howIDoIt: "I Do It Wel",
//     simeArray: ["string one", "string two", 42],
//     withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
// }

interface someInterface {
    howIDoIt: string,
    simeArray: [string, string, number] | [string, number],
    withData?: [someInterface]; 
}

let some : someInterface = {
    howIDoIt: 'I Do It Wel',
    simeArray: ['1', '2', 3],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }]
}

console.log(some)

// 3. Типизация функций, используя Generic
// В уроке про Generics мы написали интерфейс массива MyArray
// interface MyArray<T> {
//   [N: number]: T;
//  добавьте типизацию для метода reduce
//     reduce();
// }
// Справка о работе reduce
// const initialValue = 0;
// [1,2,3].reduce((accumulator, value) => accumulator + value, initialValue); // -> 6
// Результат работы предыдущей функции передается в следующую в качестве аргумента accumulator. На итерации 0 - accumulator === initialValue. Если initialValue не указан, то accumulator это 0 элемент массива

const myArray: MyArray<number> = [10, 15, 20]

interface MyArray<T> {
    [N: number]: T;

    reduce<U>( fn: (prev: U, next: T) => U): U
}

console.log(myArray.reduce((a, b) => (a + b)))


// 4. Работа с MappedTypes
// interface IHomeTask {
//     data: string;
//     numbericData: number;
//     date: Date;
//     externalData: {
//         basis: number;
//         value: string;
//     }
// }
// Стандартный generic Partial работает так же как Readonly, только для внешних ключей.
// Напишите такой MyPartial, чтобы создание подобного объекта стало возможным
// const homeTask: MyPartial<IHomeTask> = {
//     externalData: {
//         value: 'win'
//     }
// }

// type MyPartial<T> = {
//     [N in keyof T]: T[N] extends object ? MyPatial<T[N]> : T[N]
// }

interface IHomeTask {
    data: string;
    numbericData: number;
    date : Date;
    externalData: {
        basis: number;
        value: string;
    }
}

const homeTask: Partial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
}

type Partial<T> = {
   [P in keyof T]?: T[P] extends object ? Partial<T[P]> : T[P]
}
