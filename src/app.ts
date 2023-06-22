//Використовуються коли заздалегідь невідомо які можуть бутти поля в об'єкті

interface Person {
	name: string;
	age: number;
	[x: string]: string | number;
}

const user: Person = {
	name: 'Max',
	gender: 'Man',
	country: 'USA',
	age: 30,
};
