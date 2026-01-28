// destrutturazione delle props direttamente nei parametri della funzione
function ProductCard({ title, price }) {
    return (
        <div className="product">
            <div className="product-info">
                <h5>{title}</h5>
                <p><strong>Il prezzo del prodotto è:</strong> {price}</p>
            </div>
        </div>
    );
}

export default ProductCard;