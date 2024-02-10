import { useState } from "react";
import "./ProductList.css"
import { useFetch } from "../hooks/useFetch";

export const ProductList = () => {
    const [url, setUrl] = useState("http://localhost:8000/products");
    //use custom hook, get it's data and rename it as products.
    const { data: products, loading } = useFetch(url);

    return (
        <section>
            <div className="filter">
                <button onClick={() => setUrl("http://localhost:8000/products")}>All</button>
                <button onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>In Stock</button>
            </div>

            {loading && <p className="loading">Loading products...</p>}

            {
                products && products.map((product) => {
                    return <div className="card" key={product.id}>
                        <p className="id">{product.id}</p>
                        <p className="name">{product.name}</p>
                        <p className="info">
                            <span>${product.price}</span>
                            <span className={product.in_stock ? "instock" : "unavailable"}>{product.in_stock ? "In Stock" : "Unavailable"}</span>
                        </p>
                    </div>
                })
            }
        </section>
    )
}
