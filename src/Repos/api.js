import { get } from '../http'

export const getRepos = async (org) => {
	const url = org ? `https://api.github.com/orgs/${org}/repos` : 'https://api.github.com/user/repos'
	return await get(url)
}
