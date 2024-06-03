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
            <div className="mt-12">
                <h2 className="text-slate-800  font-playfair-display font-bold lg:text-7xl my-4 text-center text-4xl uppercase leading-6  ">Contact - Us </h2>
                <Contact />
            </div>
            
        </>
    )
}

export default Home