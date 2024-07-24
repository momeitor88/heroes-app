import { useMemo } from 'react';
import { getHeroes } from '../../../services';
import { HeroListItem } from './HeroListItem';

export const HeroList = ({ published }) => {
    const heroes = useMemo(()=> getHeroes(published), [published]);
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
