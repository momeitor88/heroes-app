import { heroes } from "../assets/data/heroes";


export const getHeroes = (published) => {
    const validPublished = ['DC', 'Marvel'];
    if (!validPublished.includes(published)) {
        throw new Error(`Publisher "${published}" no es correcto`);
    }
    return heroes.filter(hero => hero.publisher === published);
}