interface iPerson {
	readonly name: string;
	age: number;

	greet(phrase: string): void;
}

// type iPerson = {s
// 	readonly name: string;
// 	age: number;

// 	greet: (phrase: string) => void;
// };

interface iPilot {
	flyMessage(): void;
}

class Pilot implements iPerson, iPilot {
	constructor(public readonly name: string, public age: number) {
		this.checkAge();
	}

	private checkAge() {
		if (this.age < 28) {
			throw new Error('Pilot too young');
		}
	}

	public greet(phrase: string): void {
		console.log(phrase + ' ' + this.name);
	}

	public flyMessage(): void {
		console.log('Літак набрав вистоту, приємного польоту');
	}
}

abstract class Plane {
	protected pilot?: iPilot;

	public sitInPlane(pilot: iPilot) {
		this.pilot = pilot;
	}

	public abstract startEngine(): boolean;
}

class Boeing extends Plane {
	public startEngine(): boolean {
		if (!this.pilot) {
			throw new Error('No pilot in cabin');
		}
		console.log('Запуск турбін');
		this.pilot.flyMessage();
		return true;
	}
}

class Terrorist implements iPilot {
	bluff(phrase: string) {
		console.log(phrase);
	}

	public flyMessage(): void {
		console.log('Літак зачвачений');
	}
}

const boeing = new Boeing();
const pilot = new Terrorist();

// const pilot = new Pilot('Max', 32);
// pilot.greet('Вас вітає капітан корабля');
boeing.sitInPlane(pilot);

pilot.bluff('Залишайтесь на місцях');

boeing.startEngine();
