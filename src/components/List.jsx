import { useEffect, useState } from "react";
import Item from "./Item.jsx";

export default function List() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetcher() {
            try {
                const rawData = await fetch("https://my-json-server.typicode.com/k4teseo/mp4/blushes");
                const blushes = await rawData.json();
                setData(blushes);
                console.log("Yay");
            } catch (error) {
                console.log("Nay");
            }
        }

        fetcher();
    }, []);

    return (
        <>
            {data.map((blush) => (
                <Item
                    key={blush.id}
                    name={blush.name}
                    brand={blush.brand}
                    price={blush.price}
                    size={blush.size}
                    rating={blush.rating}
                    type={blush.type}
                    carrier={blush.carrier}
                />
            ))}
        </>
    );
}