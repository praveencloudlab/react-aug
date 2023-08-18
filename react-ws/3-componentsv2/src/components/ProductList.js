import React from 'react';

const ProductList = () => {
    let products=[
                 {id: '1', name: 'Laptop', description:'Dell', price:56000},
                 {id: '2', name: 'Mobile', description:'Apple 14 Pro', price:80000},
                 {id: '3', name: 'Mouse', description:'Dell Wireless', price:8000},
                 {id: '4', name: 'Laptop', description:'Mac Book Pro', price:260000},
                 {id: '5', name: 'Laptop', description:'HP', price:70000}
             ];

    function renderProducts(){
        return products.map(product=>{
            return(
                <tr>
                    <td> {product.id}</td>
                    <td> {product.name}</td>
                    <td> {product.price}</td>
                    <td> {product.description}</td> 
                    <td><button  className='btn btn-primary' style={{'background':'black'}}>Edit</button></td>
                </tr>
                
            )
        })
    }
    const styles={
        fontFamily:'Verdana',
        'color':'blue'
    }
    return (
        <div>
        <h1>Products</h1>
        <hr/>
        <table>
                <thead >
                    <tr style={styles}>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Desccription</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {renderProducts()}
                </tbody>
            </table>        
        </div>
    );
};

export default ProductList;