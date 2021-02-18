import './Card.css';

function Card({ id, name, email }) {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow shadow-5">
            <img className="robotImage" alt='robots' src={`https://robohash.org/${id}`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;