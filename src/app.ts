interface Admin {
	name: string;
	privileges: string[];
}

interface User {
	name: string;
	startDate: Date;
}

/*

type ComplexType = string | number;

function combine(a: ComplexType, b: ComplexType) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString();
	}
	return a + b;
}

console.log(combine(1, '2'));
*/

type AdminOrUser = Admin | User;

function showFields(el: AdminOrUser) {
	if ('startDate' in el) {
		console.log(el.startDate);
	}
}
