import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./components/CartContext";
import NavBar from "./components/NavBar";



function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar />
                <Main />
                <Footer />
            </ BrowserRouter>
        </CartProvider>
    )
}

export default App;