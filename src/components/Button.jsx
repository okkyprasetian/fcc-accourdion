function Button({ toggleAnswer, obj }) {
    return (
        <button onClick={() => toggleAnswer(obj.id)} className="btn">
            <div>{obj.buttonC ? '-' : '+'}</div>
        </button>
    );
}

export default Button;