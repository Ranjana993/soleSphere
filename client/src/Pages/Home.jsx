import Banner from "./Banner"
import Sellerdetail from "./BecomeSeller/Sellerdetail"
// import Collection from "./Collection"
import Contact from "./Contact"
import ProductList from "./ProductList"


const Home = () => {
    return (
        <>
            <Banner />
            <ProductList />
            <Sellerdetail />
            {/* <Collection /> */}
            <Contact />
            
        </>
    )
}

export default Home