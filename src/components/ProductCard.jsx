import { Link } from "react-router-dom"
import ProductDetail from "../pages/ProductDetail";

// destrutturazione delle props direttamente nei parametri della funzione
function ProductCard({ title, price, image }) {
    return (

        <div className="card h-100" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
                <p className="mt-auto fw-bold">€ {price}</p>
                <Link to=":id" className="btn btn-primary">
                    Dettagli
                </Link>
            </div>
        </div>
    );
}

export default ProductCard;