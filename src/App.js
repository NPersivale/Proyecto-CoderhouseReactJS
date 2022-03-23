import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./components/CartContext";

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
            </ BrowserRouter>
        </CartProvider>
    )
}

export default App;