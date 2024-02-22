import Banner from "./Banner"
import Collection from "./Collection"
import ProductList from "./ProductList"
import Video from "./Video"


const Home = () => {
    return (
        <>
            <Banner />
            <h1 className="text-3xl mx-4 my-2 tracking-widest">BEST SELLER...</h1>
            <ProductList />
            <Collection /> 
            <Video /> 
        </>
    )
}

export default Home