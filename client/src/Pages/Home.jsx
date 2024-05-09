// import Banner from "./Banner"
import Collection from "./Collection"
import Contact from "./Contact"
import ProductList from "./ProductList"
import Video from "./Video"


const Home = () => {
    return (
        <>
            {/* <Banner /> */}
            <h1 className="text-3xl text-center mx-4 my-2 tracking-widest">Best Seller...</h1>
            <ProductList />
            <Collection />
            <Video />
            <h2 className="text-slate-800 font-bold lg:text-6xl my-4 text-center text-4xl uppercase leading-6  ">Contact Us </h2>
            <Contact />
        </>
    )
}

export default Home