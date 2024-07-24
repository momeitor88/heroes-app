import { heroes } from "../assets/data/heroes";


export const getHeroeId = (id) => {
    if (!id) {
        throw new Error('El id es necesario');
    }
    return heroes.find(hero => hero.id === id);
}