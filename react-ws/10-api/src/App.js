import {useState} from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

const App = () => {
  const[showComponent,setShowComponent]=useState(false);
  return (
    <div className='container'>
      
      {!showComponent &&<ProductForm/>}
  
      {showComponent && <><ProductList/> <hr/> </>}

      

      
    </div>
  );
};

export default App;