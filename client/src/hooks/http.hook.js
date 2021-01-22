import { useCallback, useState } from "react";

export const
	IDLE = 'idle',
	PENDING = 'pending',
	FULFILLED = 'fulfilled',
	REJECTED = 'rejected',
	GET = 'GET',
	POST = 'POST',
	DELETE = 'DELETE',
	PUT = 'PUT';


export function useHttp() {

	const [status, setStatus] = useState(IDLE);

	const request = useCallback(async ({ url, method = GET, headers = {}, body }) => {

		try {

			if (body) {
				body = JSON.stringify(body);
				headers['Content-Type'] = 'application/json';
			} 

			setStatus(PENDING);

			const response = await fetch(url, { method, headers, body });

			const data = await response.json();

			setTimeout(() => {
				setStatus(FULFILLED);
			}, 2000);

			return data;

		} catch (error) {

			setStatus(REJECTED);

			return error;

		}


	}, []);

	return [request, status];

} 