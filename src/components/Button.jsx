import { FaPlus, FaMinus } from 'react-icons/fa'

function Button({ toggleAnswer, obj }) {
    return (
        <button onClick={() => toggleAnswer(obj.id)} className="btn">
            <div className="btn-ic">{obj.buttonC ? <FaMinus /> : <FaPlus />}</div>
        </button>
    );
}

export default Button;