import { useState } from "react";


function ProductCard({ product }) {

    const [likes, setLikes] = useState(product.likes)
    const [isEditing, setIsEditing] = useState(false);
    const [price, setPrice] = useState(product.price);
    const [editedPrice, setEditedPrice] = useState(product.price);




    function handleLikes() {
        setLikes((prevLikes) => prevLikes + 1);

    }

    function handleSave() {
        fetch(`http://localhost:3001/products/${product.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                price: editedPrice,
            }),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("failed to save product");
                }
                return res.json();
            })
            .then((data) => {
                setPrice(data.price);
                setIsEditing(false);
            })
    }






    return (
        <div>

            <h2> {product.name} </h2>

            <img src={product.image ? (
                <img src={product.image} alt={product.name} />
            ) : (
                <div>No image available</div>
            )} />

            <p> {product.anime} </p>
            <p> {product.category} </p>

            {isEditing ? (
                <>
                    <input value={editedPrice} onChange={(e) => setEditedPrice(e.target.value)} />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </>
            ) : (
                <>
                    <p>${price}</p>
                    <button onClick={() => setIsEditing(true)}>Edit Price</button>
                </>
            )}

            <button onClick={handleLikes}> ❤️ {likes}</button>
        </div>

    );
}


export default ProductCard;