export function validateUrlParams(params) {
	for (const [key, value] of Object.entries(params)) {
		if (value === '&&') params[key] = undefined;
	}
}