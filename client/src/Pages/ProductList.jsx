import { useEffect, useState } from 'react'
import axios from "axios"

const ProductList = () => {
    const [data, setData] = useState([])
    const getAllData = async () => {
        const res = await axios.get("http://localhost:8000/get-products");
        // console.log(res?.data?.products);
        setData(res?.data?.products)
    }

    useEffect(() => {
        getAllData()
    }, [])
    return (
        <div className=''>
            <div className='flex flex-wrap items-center'>
                {
                    data.map(item => (
                        <div key={item.id} className='flex'>
                            <img className='w-44' src={item.url} alt="" />
                        </div>

                    ))
                }

            </div>
        </div>
    )
}

export default ProductList