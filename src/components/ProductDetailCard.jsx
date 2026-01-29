function ProductDetailCard(props) {

    const { infoProduct } = props


    return (
        <div className="container my-4">
            <div className="card p-3">
                <div className="row g-3 align-items-center">
                    {/* Colonna immagine */}
                    <div className="col-md-4 text-center">
                        <img
                            src={infoProduct.image}
                            alt={infoProduct.title}
                            className="img-fluid rounded"
                            style={{ maxHeight: "250px", objectFit: "contain" }}
                        />
                    </div>

                    {/* Colonna dati */}
                    <div className="col-md-8">
                        <h3>{infoProduct.title}</h3>
                        <p className="text-muted">{infoProduct.description}</p>
                        <p className="fw-bold fs-5">€ {infoProduct.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailCard