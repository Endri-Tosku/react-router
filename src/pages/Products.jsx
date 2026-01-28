import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const endpoint = "https://fakestoreapi.com/products";

function Products() {

    // creiamo var di stato per lista dei prodotti
    const [products, setProducts] = useState([]);

    // funzione di fetch 
    // // si occupa di fare la chiamata all' API
    function fetchProducts() {
        axios.get(endpoint)
            .then((res) => {
                setProducts(res.data);
            })
            .catch(err => {
                console.error("Errore nella richiesta:", err);
            });
    }

    // useEffect Serve a eseguire la funzione fetchProducts
    // sOLO una volta, al caricamento del componente
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="container">
            <h3>Products List</h3>
            <div className="products">
                {
                    // map dell'array di prodotti 
                    // per ogni prodotto creiamo una ProductCard
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            price={product.price}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Products;