import Banner from "./Banner"
import Collection from "./Collection"
import Contact from "./Contact"
import ProductList from "./ProductList"


const Home = () => {
    return (
        <>
            <Banner />
            <ProductList />
            <Collection />
            <h2 className="text-slate-800 font-bold lg:text-6xl my-4 text-center text-4xl uppercase leading-6  ">Contact Us </h2>
            <Contact />
        </>
    )
}

export default Home