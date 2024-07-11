import { defineStore } from 'pinia';
import axios from 'axios';
// import Cookies from 'js-cookie';

export const useMainStore = defineStore('main', {
	state: () => ({

		isLoading: false,
		statusCode: null,
		isLoadingUpdate: false,
		statusCodeUpdate: null,
		errors: null,
		validationsErr: {},
	}),
	getters: {

	},
	actions: {

	},
});

async function fetchDataAndSaveToCache(cookieName, url, dataParam, days = 1) {
	// Check if data exists in cookies
	const date = new Date();

	const existingData = localStorage.getItem(cookieName);
	const expireDate = localStorage.getItem(cookieName + '-expire')
		? JSON.parse(localStorage.getItem(cookieName + '-expire'))?.date
		: JSON.parse('{"date": 0}');
	const isExpired = date.getTime() >= expireDate;

	if (existingData && existingData != 'undefiend' && !isExpired) {
		// Data already exists, return it
		return Promise.resolve(JSON.parse(existingData));
	} else {
		// Data doesn't exist, make Axios request
		return await axios
			.get(url)
			.then((response) => {
				// Save data to cookies with 6 months expiration
				localStorage.setItem(
					cookieName,
					JSON.stringify(response.data[dataParam])
				);
				localStorage.setItem(
					cookieName + '-expire',
					JSON.stringify({
						date: date.setTime(
							date.getTime() + days * 24 * 60 * 60 * 1000
						),
					})
				);
				// Return the data
				return response.data[dataParam];
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
				throw error; // You might want to handle errors appropriately in your application
			});
	}
}
