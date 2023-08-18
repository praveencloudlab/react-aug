import React from 'react';
import Product from './Product';

const ProductsList = (props) => {
    let{prodData}=props;

    let renderProducts=()=>{
        return prodData.map(product=>{
            return(
                <div className='col-3 mb-4' key={product.id}>
                    <Product product={product}/>
                </div>
               
            )
        })
    }

    return (
        <div>
           
          <h2>Product List Component</h2> 
          <div className='row'>
            {renderProducts()}
          </div>
           
           <hr/>
          
        </div>
    );
};

export default ProductsList;