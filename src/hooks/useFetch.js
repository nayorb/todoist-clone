const useFetch = () => {
	return (urlBase, query = null) => {
		let params = ''
		if (query) {
			params =
				'?' +
				Object.keys(query).reduce((acc, key, idx) => {
					acc += idx !== 0 ? '&' : ''
					acc += `${key}=${query[key]}`
					return acc
				}, '')
		}
		return fetch(urlBase + params).then(success => success.json())
	}
}

export default useFetch
