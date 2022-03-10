import ItemListContainer from "./ItemListContainer";
import BackToTop from "./BackToTop";
import ItemDetailContainer from "./ItemDetailContainer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom"
import Cart from "./Cart";


const Main = () => {

    return (
        <>
            <main>
                <BackToTop />

                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/game/:game" element={<ItemListContainer />} />
                    <Route path="/cart/" element={<Cart />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                </Routes>

                <ToastContainer position="bottom-right" />
            </main>
        </>
    )
}

export default Main