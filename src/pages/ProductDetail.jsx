import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import NavBar from "../components/Navbar";
import ProductDetailCard from "../components/ProductDetailCard";

const endpointBase = "https://fakestoreapi.com/products/";

function ProductDetail() {

    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(endpointBase + id)
            .then(resp => {
                setProduct(resp.data)
            })
            .catch(err => {
                console.log("errore sulla chiamata", err)

            })
            .finally(() => {
                setLoading(false);
            });
    }, [id])

    return (
        <>
            <NavBar />
            <h2>DETTAGLIO dei prodotti.</h2>

            {loading && <p className="loader">Loading...</p>}
            {!loading && product && <ProductDetailCard infoProduct={product} />}

        </>
    )
}

export default ProductDetail