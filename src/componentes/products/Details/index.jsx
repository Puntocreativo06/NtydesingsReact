import './styles.css'

const Details = ({id, image, name, category, description, price, stock, onAddToCart}) => {
    return (
        <div className="tarjeta card">
            <img src={image} className="card-img-top" alt={name}></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{category}</p>
                    <p className="card-text">{description}</p>
                    <p className="card-text">${price}</p>
                    <p className="card-text">{stock} Disponibles</p>
                    <button onClick={()=> onAddToCart(id)} className='btn btn-primary'> 
                        Agregar al carrito
                    </button>
                </div>
        </div>
    )
}

export default Details;