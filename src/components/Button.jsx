function Button({ toggleAnswer, obj }) {
    return (
        <button onClick={() => toggleAnswer(obj.id)} className="btn">
            {obj.buttonC ? '-' : '+'}
        </button>
    );
}

export default Button;