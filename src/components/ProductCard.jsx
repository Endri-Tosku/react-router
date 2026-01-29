import { Link } from "react-router-dom"

// destrutturazione delle props direttamente nei parametri della funzione
function ProductCard({ title, price, image, id }) {
    return (

        <div className="card h-100" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
                <p className="mt-auto fw-bold">€ {price}</p>
                <Link to={`/prodotti/${id}`} className="btn btn-primary">
                    Dettagli
                </Link>
            </div>
        </div>
    );
}

export default ProductCard;