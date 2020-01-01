import useFetch from '../hooks/useFetch'

const fetchData = useFetch()

const mainURL = 'https://api.todoist.com/sync/v8/sync'
const token = '360ab08cd84707a6e83946292f9a56465bd32b9e'

const issueRequest = params => {
	return fetchData(mainURL, {
		token: token,
		sync_token: '*',
		...params,
	})
}

const getResources = (resources = ['all']) => {
	return issueRequest({
		resource_types: JSON.stringify(resources),
	})
}

getResources(['projects', 'items']).then(data => {
	console.log(data)
})
