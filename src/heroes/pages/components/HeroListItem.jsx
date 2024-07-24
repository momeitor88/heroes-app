import { useNavigate } from "react-router-dom";

export const HeroListItem = (
    {
        id,
        publisher,
        superhero,
        alter_ego,
        first_appearance,
        characters
    }
) => {
    const img = `./src/assets/heroes/${id}.jpg`;
    const navigate = useNavigate();
    const onNavigate = () => {
        navigate(`/hero/${id}`);
    }
    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={img} className="card-img" alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                (alter_ego !== characters) && <p>{characters}</p>
                            }
                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>
                            <button className="btn btn-secondary" onClick={onNavigate}>
                                Ver más...
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
