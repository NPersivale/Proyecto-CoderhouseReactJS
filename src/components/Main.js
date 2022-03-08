import ItemListContainer from "./ItemListContainer";
import BackToTop from "./BackToTop";
import ItemDetailContainer from "./ItemDetailContainer";

const Main = () => {

    return (
        <main>
            <BackToTop />
            <ItemListContainer />
            <ItemDetailContainer />
        </main>
    )
}

export default Main