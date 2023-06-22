function merge<T, U>(objA: T, objB: U) {
	return Object.assign({}, objA, objB);
}

type Person = {
	name: string;
};

type AdditionFields = {
	age: number;
};

const toMerge1 = {
	name: 'Max',
};

const toMerge2 = {
	age: 21,
};

const merged = merge<Person, AdditionFields>(toMerge1, toMerge2);

merged.name;
