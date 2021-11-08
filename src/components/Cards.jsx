import Card from './Card'

function Cards({ qA }) {
    return (
        <div className="cards">
            {qA.map(obj => <Card key={obj.id} obj={obj} />)}
        </div>
    );
}

export default Cards;