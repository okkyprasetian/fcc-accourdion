import Button from './Button'

function Card({ obj }) {
    return (
        <div className="card">
            <div className="card-top">
                <h3 className="question">{obj.q}</h3>
                <Button />
            </div>
        </div>
    );
}

export default Card;