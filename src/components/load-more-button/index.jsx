import { useEffect, useState } from "react"
import './style.css'

const LoadData = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [disable,setDisbale]=useState(false)


    const fetchProducts = async () => {
        try {
            setLoading(true)
            //const response =await fetch(`https://dummyjson.com/products?limit=20&skip=${count===0?0:count*20}`)
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20
                }`
            );
            const result = await response.json()
            if (result && result.products && result.products.length) {
                setProducts((prevdata)=>[...prevdata,...result.products])
                setLoading(false)
            }
        }
        catch (e) {
            console.log(e.message)
            setLoading(true)
        }
    }
    useEffect(() => {
        fetchProducts()
    },[count])

    useEffect(()=>{
        if(products && products.length===100)
        setDisbale(true)
    })

    if (loading)
        return <div>Loadinf Data!!! Pls wait</div>

    return (
    <div className="container-box-load">
        <div className="products-container">
            {
                products && products.length ?
                    products.map((item) => {
                        return (<div  className="product" key={item.id}>
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>

                        )
                    }) : null
            }
        </div>
        <div className="button-container">
            <button disabled={disable} onClick={()=>{setCount(count+1)}}> load more products</button>
            {disable? <p>reached maximum</p>:null}
        </div>
    </div>
    )
}

export default LoadData;