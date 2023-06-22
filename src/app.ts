function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
	return obj[key];
}

const field = extractValue({ name: 'Max' }, 'name');
