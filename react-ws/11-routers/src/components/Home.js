import React from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import ProductList from './ProductList'
import ProductForm from './ProductForm'
import Dashboard from './Dashboard';


const Home = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-2 bg-light'>
                <nav className="nav flex-column">
                     <Link className="nav-link active" aria-current="page" to={"dashboard"}>Home</Link> <br/>
                     <Link className="nav-link" to={"listProducts"}>Display</Link> <br/>
                     <Link className="nav-link" to={"addProduct"}>Add Product</Link> <br/>
                </nav> 
                </div>
                <div className='col-10'>
                    <Routes>
                       <Route path='dashboard' element={<Dashboard/>}></Route>
                        <Route path='listProducts' element={<ProductList/>}></Route>
                        <Route path='addProduct' element={<ProductForm/>}></Route>
                        <Route path='editProduct/:id' element={<ProductForm/>}></Route>
                     </Routes>
                </div>
            </div>
        </div>
               
           
    );
};

export default Home;