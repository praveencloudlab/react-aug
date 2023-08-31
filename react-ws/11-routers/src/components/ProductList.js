import {useState,useEffect} from 'react';
import axios from 'axios'
import Product from './Product';
const ProductList = () => {
    const[products,setProducts]=useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(response=>{
            console.log(response.data.products);
            setProducts(response.data.products);
        })
        
    },[])

    //list all products
    let renderProducts=()=>{
        return products.map(product=>{
            return(
                <div className='col-3 mb-4' key={product.id}>
                    <Product product={product}/>
                </div>
               
            )
        })
    }
    return (
        <div>
            <h2>Products</h2>
            <hr/>

            <div className='row'>
            {renderProducts()}
          </div>
           
           <hr/>

        </div>
    );
};

export default ProductList;