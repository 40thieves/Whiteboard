import { AsyncStorage } from 'react-native'
import base64 from 'base-64'

import { post } from '../http'

export const getCredentials = async () => {
	const username = await AsyncStorage.getItem('GITHUB_USERNAME')
	const token = await AsyncStorage.getItem('GITHUB_ACCESS_TOKEN')

	if (username && token) return { username, token }
}

export const logIn = async (username, password, otp) => {
	console.log(username, password, otp);

	const foo = await makeToken(username, password, otp)

	console.log(foo);

	// get token from response

	await AsyncStorage.setItem('GITHUB_USERNAME', username)
	// await AsyncStorage.setItem('GITHUB_ACCESS_TOKEN', token)
}

const makeToken = async (username, password, otp) => {
	const headers = new Headers()

	headers.append('Authorization', 'Basic ' + base64.encode(`${username}:${password}`))
	if (otp) headers.append('X-GitHub-OTP', otp)

	headers.append('Content-Type', 'application/json')

	return await post('https://api.github.com/authorizations', {
		headers,
		body: JSON.stringify({
			scopes: ['repo'],
			note: 'whiteboard'
		})
	})
}