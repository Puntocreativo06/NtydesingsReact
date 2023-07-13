
// eslint-disable-next-line react/prop-types
const Counter = ({counterValue, onDecrementCounter, onIncrementCounter,isValidCounter}) => {
return (

    <div className="d-flex">
    <button className="btn btn-primary" onClick={onDecrementCounter} disabled={!isValidCounter}>-</button>
    <h1>{counterValue}</h1>
    <button className="btn btn-primary" onClick={onIncrementCounter}>+</button>
    </div>
    
)
};

export default Counter; 
