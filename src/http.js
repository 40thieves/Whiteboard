import base64 from 'base-64'

import config from '../config'

const headers = new Headers()
headers.append('Authorization', 'Basic ' + base64.encode(`${config.username}:${config.accessToken}`))

const BASE_OPTS = { headers }

const error = json => {
	const err = new Error(json.message)
	err.response = json
	return err
}

const request = async (method, url, opts = BASE_OPTS) => {
	const response = await fetch(url, {
		...opts,
		method,
	})

	const json = await response.json()

	if (response.status >= 400) {
		throw error(json)
	}

	return json
}

export const get = async (url, opts) => request('get', url, opts)

export const post = async (url, opts) => request('post', url, opts)
