import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";

function App(){
    return (
    <>
        <Header/>
        <Main/>
        <ItemListContainer name="Horacio" age={20}/>
        <ItemListContainer name="Maria" age={34}/>
        <Footer/>
    </>
    )
}

export default App;