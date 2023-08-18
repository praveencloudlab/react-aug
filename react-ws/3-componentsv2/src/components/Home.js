import React from 'react';
import ProductForm from './Product-Form';
import Product from './Product';
import ProductList from './ProductList';

const Home = () => {
    return (
        <div>
           
            <div className='row'>
                <div className='col-6'>
                    <Product/>
                </div>
                <div className='col-6'>
                    <ProductList/>
                </div>

            </div>
        </div>
    );
};

export default Home;