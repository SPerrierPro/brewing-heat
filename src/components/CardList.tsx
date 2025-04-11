import { useState, useEffect } from "react";
import Card from "./Card";
import "../style/CardList.css"

function CardList() {
    type drinkType = {
        id: number,
        title: string,
        price: number,
        description: string,
        image: string,
        ingredients: string[],
        totalSales: number
    }

    const [drinks, setDrinks] = useState<drinkType[] | null>(null);

    useEffect(() => {
        fetch("https://api.sampleapis.com/coffee/hot")
            .then((response) => response.json())
            .then((data) => setDrinks(data))
            .catch((error) => console.log(error));
    }, []);


    return (
        <article className="card-list">
            {drinks ? (
                drinks.map((d) =>
                    <Card key={d.id} drink={d} />)
            ) : (
                <h2>Loading, please wait a second..</h2>
            )
            }
        </article>

    )
}

export default CardList;