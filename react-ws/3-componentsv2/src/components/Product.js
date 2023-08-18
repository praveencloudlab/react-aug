import React from 'react';

const Product = () => {
    let product={
        id:10,
        name:'Pen',
        price:653,
        description:'Red Ink Pen'
    }

    return (
        <div>
            <h1>Product Component</h1>
            <hr/>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Desccription</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> {product.id}</td>
                        <td> {product.name}</td>
                        <td> {product.price}</td>
                        <td> {product.description}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Product;