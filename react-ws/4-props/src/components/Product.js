import React from 'react';
import StarRating from './StarRating';

const Product = (props) => {
    let {product}=props
    return (
        <div>
           <div className="card h-100" style={{'width': '18rem'}}>
             <img src={product.thumbnail} className="card-img-top" alt="..."/>
             <div className="card-body">
             <h5 className="card-title"><h2>{product.title}</h2></h5>
             <p style={{'color':'#FF522D'}} className="card-text"><h2>{'\u20B9'}{product.price}</h2> </p>
             <StarRating rating={product.rating}/>
            
        </div>
</div>

        </div>
    );
};

export default Product;