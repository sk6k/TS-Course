abstract class House1 {
	door: boolean;
	// властивість door – вона може бути закрита, або відкрита.

	key: object;
	// властивість key – об'єкт класу Key.

	constructor(door: boolean, key: object) {
		this.door = door;
		this.key = key;
	}

	comeIn(this: House1) {
		if (this.door) {
			//метод comeIn, який додає об'єкт класу Person у властивість tenants і це спрацьовує лише, якщо door відкрита.
		}
	}
	abstract openDoor(key: string): boolean; //абстрактний метод openDoor приймає аргумент класу Key
}

// class MyHouse extends House1 {
//     openDoor(key: string) {
//         if (key){
//             return true
//         }
//     }
// }

// let signature = new Key
