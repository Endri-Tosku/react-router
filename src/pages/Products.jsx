import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import NavBar from "../components/Navbar";


const endpoint = "https://fakestoreapi.com/products/";

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
        <>
            <NavBar />

            <div className="container my-4">
                <h3 className="mb-4">Products List</h3>
                <div className="row g-4">
                    {
                        // map dell'array di prodotti 
                        // per ogni prodotto creiamo una ProductCard
                        <div className="row g-4">
                            {products.map(product => (
                                <div
                                    className="col-12 col-sm-6 col-md-4 col-lg-3"
                                    key={product.id}
                                >
                                    <ProductCard
                                        id={product.id}
                                        title={product.title}
                                        price={product.price}
                                        image={product.image}
                                    />
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default Products;