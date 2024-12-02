import Navbar from "./components/Navbar";
import Header from './components/Header';
import Cards from "./components/Cards";
const App = () => {
    return (
        <div>
            
            <Navbar />
            <Header />
            <h1>Top Product</h1>
            <Cards></Cards>
        </div>
    )
}

export default App;