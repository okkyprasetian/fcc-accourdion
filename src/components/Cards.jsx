import Card from './Card'

function Cards({ qA, toggleAnswer }) {
    return (
        <div className="cards">
            {qA.map(obj => <Card key={obj.id} obj={obj} toggleAnswer={toggleAnswer} />)}
        </div>
    );
}

export default Cards;