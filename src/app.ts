// function merge<T extends object, U extends object>(objA: T, objB: U) {
// 	return Object.assign({}, objA, objB);
// }

// const toMerge1 = {
// 	name: 'Max',
// };

// const toMerge2 = {
// 	age: 21,
// };

// const merged = merge(toMerge1, toMerge2);

// merged.name;

interface ILength {
	length: number;
}

function getLength<T extends ILength>(str: T): number {
	return str.length;
}

const obj = {
	length: 10,
};

getLength(obj);
