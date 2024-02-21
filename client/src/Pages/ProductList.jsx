import { useEffect } from 'react'
import axios from "axios"

const ProductList = () => {
    const getAllData = async () => {
        const res = await axios.get("http://localhost:8000/get-products");
        console.log(res?.data?.products
        );
    }

    useEffect(() => {
        getAllData()
    }, [])
    return (
        <div>ProductList</div>
    )
}

export default ProductList