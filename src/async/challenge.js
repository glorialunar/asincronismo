const fetchData = require('../utils/fetchData');
const api = 'https://rickandmortyapi.com/api/character/';

const challenge = async (url) => {
    try {
        const data = await fetchData (url);
        const character = await fetchData(`${api}${data.results[0].id}`);
        const origin = await fetchData (character.origin.url);
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (err) {
        console.error(err);
    }
}

console.log('Before');
challenge(api);
console.log('After');