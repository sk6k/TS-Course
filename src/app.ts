class House {
	private tenants: string[] = [];

	constructor(public readonly type: string, protected street: string) {}

	public showAddress(this: House): void {
		console.log('Address' + ' ' + this.street);
	}

	public showType(this: House): void {
		console.log('Type ' + this.type);
	}

	public addTenant(name: string) {
		this.tenants.push(name);
	}

	public showTenants() {
		console.log(this.tenants);
	}
}

class StoneHouse extends House {
	private chargeOfTheHouse: string;
	constructor(street: string, general: string) {
		super('stone', street);

		this.chargeOfTheHouse = general;
	}

	public showAddress(): void {
		console.log('Address' + ' ' + this.street);
	}

	public showTenants() {
		console.log('General: ' + this.chargeOfTheHouse);

		super.showTenants();
	}
}

const stoneHouse = new StoneHouse('Stone-world', 'Max');

stoneHouse.addTenant('Kiwi');

stoneHouse.addTenant('Ajax');

stoneHouse.showTenants();
