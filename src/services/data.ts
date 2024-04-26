export const getCharacters = async() => {
	try {
		const data = await fetch('https://swapi.py4e.com/api/people').then((res) => res.json())
		return data.results
		
	} catch (error) {
		console.log(error)
	}
}