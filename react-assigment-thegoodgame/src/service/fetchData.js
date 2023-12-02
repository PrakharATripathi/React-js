const API = 'https://api.punkapi.com/v2/beers'

export default async function fetchData() {
    try {
        const response = await fetch(API);
        const data = await response.json();
        return data;
    } catch (error) {
        throw ("Error:", error)
    }
}
