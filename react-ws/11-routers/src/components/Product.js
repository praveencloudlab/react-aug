import {useState} from 'react';
import StarRating from './StarRating';
import ProductDetails from './ProductDetails';
import { Link } from 'react-router-dom';

const Product = (props) => {
    let {product}=props
    return (
        <div>
            
              <div className="card h-100" style={{'width': '18rem'}}>
            
              <Link to={`/editProduct/${product.id}`} >
             <img src={product.thumbnail} className="card-img-top" alt="..."/>
            </Link>
             <div className="card-body">
             <div className="card-title"><h2>{product.title}</h2></div>
             <div style={{'color':'#FF522D'}} className="card-text"><h2>{'\u20B9'}{product.price}</h2> </div>
             <StarRating rating={product.rating}/>
            
        </div>
</div>



        </div>
    );
};

export default Product;