import { useState } from 'react'

function Admin() {

    const [name, setName] = useState("");
    const [anime, setAnime] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");



    function handleOnSubmit(e) {
        e.preventDefault();

        const newProduct = {
            name,
            anime,
            category,
            price,
            image,
            likes: 0,
        };

        fetch("http://localhost:3001/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("failed to add product");
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setName("");
                setAnime("");
                setCategory("");
                setPrice("");
                setImage("");
            })
            .catch(console.log);
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input value={name} placeholder="Product Name" onChange={(e) => setName(e.target.value)} />
            <input value={anime} placeholder="Product Anime Name" onChange={(e) => setAnime(e.target.value)} />
            <input value={category} placeholder="Product Category" onChange={(e) => setCategory(e.target.value)} />
            <input value={price} placeholder="Product Price" onChange={(e) => setPrice(e.target.value)} />
            <input value={image} placeholder="Image URL" onChange={(e) => setImage(e.target.value)} />

            <button type="submit">Add Product</button>

        </form>
    );


};

export default Admin;