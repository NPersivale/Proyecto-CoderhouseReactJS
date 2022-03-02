import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";

function App(){
    return (
    <>
        <Header/>
        {/* <Main/> */}
        <ItemListContainer initial={0} name="Jean" price={30} stock={5}/>
        <ItemListContainer initial={0} name="Shirt" price={35} stock={3}/>
        <Footer/>
    </>
    )
}

export default App;