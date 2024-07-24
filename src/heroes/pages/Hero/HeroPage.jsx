import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroeId } from "../../../services/getHeroeId";
import { useMemo } from "react";


export const HeroPage = () => {

    const { heroId } = useParams();
    const hero = useMemo(()=> getHeroeId(heroId), [heroId]);
    if (!hero) {
        return <Navigate to="/marvel" />
    }
    const { superhero } = hero;
    const imageHeroe = `/assets/heroes/${heroId}.jpg`;

    const navigate = useNavigate();
    const onBack = () => {
        navigate(-1);
    }
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={ imageHeroe } className="img-thumbnail" alt={superhero} />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Alter ego: {hero.alter_ego}</li>
                    <li className="list-group-item">Publisher: {hero.publisher}</li>
                    <li className="list-group-item">First appearance: {hero.first_appearance}</li>
                </ul>
                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>
                <button className="btn btn-outline-info" onClick={onBack}>Regresar</button>
            </div>
        </div>
    )
}
