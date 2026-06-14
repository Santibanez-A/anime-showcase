import  { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import ProductCard from "../components/ProductCard.jsx";
import useProducts from "../hooks/useProducts.js";


function Shop() {
    const {products} = useProducts();
    const [search, setSearch] = useState("");


    const searchFilteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className="shop">

            <h1> Welcome to Anime Showcase</h1>
            <SearchBar setSearch={setSearch} />

            <section>
                {searchFilteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>

        </main>
    )


};


export default Shop;