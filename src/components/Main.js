import { React , useState } from "react"
import ItemListContainer from "./ItemListContainer";
import BackToTop from "./BackToTop";

const Main = () => {

    return (
        <main>
            <BackToTop/>
            <ItemListContainer/>
        </main>
    )
}

export default Main