import React, { useContext } from 'react';
import Footer from './Footer';
import Hero from './Hero';
import Product from './Product';
import { ProductContext } from './ProductContext';
import './Styles/Home.css'
export default function Home(){

    const { products } = useContext(ProductContext)

    const filterProducts = products.filter(items => {
      return items.category === "men's clothing" || items.category === "women's clothing" || items.category === "jewelery"
    })

    return(
        <>
        <Hero />
        <section className='py-16'>
          <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
              {filterProducts.map(product => {
                return <Product product={product} key={product.id} />
              })}
            </div>
          </div>
        </section>
        <Footer />
      </>
    )
}