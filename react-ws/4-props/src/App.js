import React from 'react';
import ProductsList from './components/ProductsList';
import Button from './components/Button';
import { loadProducts } from './data/products';

const App = (props) => {

  let data=loadProducts();
  let {products}=data; // destructuring

  
  return (
    <div className='container'>
      <h1>{props.title} - {props.name}</h1>
      <hr/>
      <Button lableName='Load Data'/>
      <Button lableName='Save Data'/>
      <Button lableName='Edit Data'/>
      <hr/>

      <ProductsList prodData={products}/>


      
    </div>
  );
};

export default App;