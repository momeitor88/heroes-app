import { getHeroes } from '../../../services';
import { HeroListItem } from './HeroListItem';

export const HeroList = ({ published }) => {
    const heroes = getHeroes(published);
    return (
    <>
        <ul>
            {
                heroes.map(hero => (
                    <HeroListItem key={hero.id} {...hero} />
                ))
            }
        </ul>
    </>
    )
}
