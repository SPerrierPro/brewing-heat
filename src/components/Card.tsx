import "../style/Card.css"
import { useState, useContext } from "react";
import CartContext from "../contexts/CartContext";

type drinkType = {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
    ingredients: string[],
    totalSales: number
}


function Card({ drink }: drinkType[]) {

    const { cartCount, setCartCount } = useContext(CartContext);
    const [articleCount, setArticleCount] = useState(0);

    return (
        <section className="drink-card">
            <img src={drink.image} alt={drink.title} className="drink-image" />
            <div className="card-text">
                <h3>{drink.title}</h3>
                <p>{drink.description}</p>
                <p>{drink.price}€</p>
            </div>
            <div className="card-button">
                {articleCount === 0 ? (
                    <button type="button" onClick={() => {
                        setArticleCount(articleCount + 1);
                        setCartCount(cartCount + 1);
                    }}>Add to your order</button>
                ) : (
                    <div className="added-article">
                        <button type="button" onClick={() => {
                            setArticleCount(articleCount - 1);
                            setCartCount(cartCount - 1);
                        }}> - </button>
                        <p> {articleCount} </p>
                        <button type="button" onClick={() => {
                            setArticleCount(articleCount + 1);
                            setCartCount(cartCount + 1);
                        }}> + </button>
                    </div>
                )}

            </div>
        </section>


    )
}

export default Card;