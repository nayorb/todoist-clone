const useLocalStorage = () => {
	const load = key => {
		return JSON.parse(localStorage.getItem(key))
	}

	const save = (key, payload) => {
		localStorage.setItem(key, JSON.stringify(payload))
	}

	return [load, save]
}

export default useLocalStorage
