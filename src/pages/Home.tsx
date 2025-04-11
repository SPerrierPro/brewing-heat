import CardList from "../components/CardList";
import "../style/HomePage.css"

function Home() {


    return (
        <main className="home-page">
            <h1>Taking your order :</h1>
            <CardList />
        </main>
    )
}

export default Home;