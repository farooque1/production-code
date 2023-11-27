import React from 'react'
import Customhook from './Customhook'

function Products() {

    // api or end point url
    // https://fakestoreapi.com/products

    const [products,error,loading] = Customhook('https://fakestoreapi.com/products')

    if(error){
        return <h1>Something went Wrong.....</h1>
    }

    if(loading){
        return <h1>Data Loading.....</h1>
    }

  return (
    <div>
    Products List 
        {
            products.map((item)=>
            <div key={item.id}>
                <p>{item.title}</p>
                <img src={item.image} width="100px" />
            </div>)
        }
    </div>
  )
}

export default Products