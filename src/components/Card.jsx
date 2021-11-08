import Button from './Button'

function Card({ obj, toggleAnswer }) {
    return (
        <div className="card">
            <div className="card-top">
                <h3 className="question">{obj.q}</h3>
                <Button toggleAnswer={toggleAnswer} obj={obj} />
            </div>
            {obj.buttonC &&
                <div className="card-bottom">
                    <p>{obj.a}</p>
                </div>
            }
        </div>
    );
}

export default Card;