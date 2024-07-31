import useSWR from "swr";

export default function List() {
    const { data, error } =
        useSWR(
            "https://my-json-server.typicode.com/k4teseo/mp4/blushes",
            (url) =>
                fetch(url).then((res) => res.json())
        );

    if (error) return <div><p>Failed to Load</p></div>;
    if (!data) return <div><p>Loading...</p></div>;

    return (
        <>
            {
                data.blushes.map((blush) => (
                    <div key={blush.id}>
                        <h1>{blush.name}</h1>
                        <p>{blush.brand}</p>
                    </div>
                ))
            }
        </>
    );
}