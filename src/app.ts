class DataStore<T> {
	private data: T[] = [];

	addItem(item: T): void {
		this.data.push(item);
	}

	getItems(): T[] {
		return this.data;
	}
}

interface iPerson2 {
	name: string;
}

const storeUsers = new DataStore<iPerson2>();

storeUsers.addItem({
	name: 'Carl',
});

storeUsers.addItem({
	name: 'Mark',
});

console.log(storeUsers.getItems());

const ageStore = new DataStore<number>();

ageStore.addItem(21);
ageStore.addItem(30);

console.log(ageStore.getItems());
