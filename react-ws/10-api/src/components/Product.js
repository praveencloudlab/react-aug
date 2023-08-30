import {useState} from 'react';
import StarRating from './StarRating';
import ProductDetails from './ProductDetails';

const Product = (props) => {
    let {product}=props
    const[showComponent,setShowComponent]=useState(false);
    return (
        <div>
            
              <div className="card h-100" style={{'width': '18rem'}}>
            
              <a href='#!' onClick={(e)=>{
                e.preventDefault();
                setShowComponent(!showComponent);
              }}>
             <img src={product.thumbnail} className="card-img-top" alt="..."/>
            </a>
             <div className="card-body">
             <div className="card-title"><h2>{product.title}</h2></div>
             <div style={{'color':'#FF522D'}} className="card-text"><h2>{'\u20B9'}{product.price}</h2> </div>
             <StarRating rating={product.rating}/>
            
        </div>
</div>

{showComponent && <hr/>}
{showComponent && <ProductDetails/>}

        </div>
    );
};

export default Product;