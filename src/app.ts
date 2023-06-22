// Це спрощення для перевірок, а чи є якесь поле в об'єкті. Можна для цього використовувати Lodash, а можна механізмом в TS.

interface Person {
	name: string;
	additionalInfo?: {
		someInfo: string;
	};
}

const user: Person = {
	name: 'Max',
	additionalInfo: {
		someInfo: 'player',
	},
};

console.log(user?.additionalInfo?.someInfo);
