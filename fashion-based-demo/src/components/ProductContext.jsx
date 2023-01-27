import { useState, useEffect, createContext } from "react"

export const ProductContext = createContext()

    const ProductProvider = ({children}) =>{

    const [products, setProducts] = useState([])

    useEffect(()=>{
        const fetchproducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setProducts(data)
        }
        fetchproducts()
    },[])
    return(
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
    }
    export default ProductProvider