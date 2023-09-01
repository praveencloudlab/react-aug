import {useState,useEffect} from 'react';
import {Controller, useForm} from 'react-hook-form';
import { loadCategories } from '../data';
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const ProductForm = () => {
  const {register,handleSubmit,formState:{errors},watch,control,reset} = useForm({mode: "onChange"});
  const{id}=useParams();
  
    const[text,setText]=useState('');
    //const [data, setData] = useState({ categories: [], brands: [] });
    const[categoryData,setCategories]=useState(loadCategories());
    const selectedCategory = watch('category');
    let {categories}=categoryData;
    console.log(categories);

    const[product,setProduct]=useState({});

     useEffect(()=>{
      if(id){
        axios.get(`https://dummyjson.com/products/${id}`)
        .then(response=>{
          setProduct(response.data);
          reset(response.data)
        })

      }else{
        setProduct({})
      }

     },[reset])


    
   // console.log(categories);
    const handleUser=(user)=>{
        const urls=text.split(',').map(url=>url.trim())
        //setImageUrls(urls);
        console.log(user);
        user.images=urls;
    }

    return (
        <div>
            <h2>Product Form</h2>
            <hr/>
 <form onSubmit={handleSubmit(handleUser)}>
            <div>
              <label>Product Name:</label>
              <input defaultValue={product.title} {...register("firstName",{required:true,minLength: 2,pattern: /^[A-Za-z]+$/i })}/>
              <div className='text-danger'>
                {errors.firstName?.type==="required" &&(<>Product Name is required</>)}
                {errors.firstName?.type==="minLength" &&(<>Product Name should be minimum 2 characters</>)}
                {errors.firstName?.type==="pattern" &&(<>Product Name should contains only alphabets</>)}
              </div>
            </div>
            <div>
              <label>Price:</label>
              <input type='number' {...register("age",{required:true,min:1,max:1000000})} defaultValue={product.price}/>
              <div className='text-danger'>
                {errors.age?.type==="required" &&(<>Age is required</>)}
                {errors.age?.type==="min" &&(<>Price should be minimum 1</>)}
                {errors.age?.type==="max" &&(<>Price should be maximum 1000000</>)}
              </div>
            </div>
           
            <div>
              <label>Description:</label>
              <textarea {...register("description")} defaultValue={product.description}></textarea>
            </div>
            <div>
                <label>Discount Percentage</label>
                <input type='text' {...register("discountPercentage")} defaultValue={product.rating}/>
            </div>

            <div>
                <label>Thumbnail Image</label>
                <input type='text' {...register("thumbnail")} defaultValue={product.thumbnail}/>
            </div>



            <div>
                <label>Rating</label>
                <input type='text' {...register("rating")} defaultValue={product.rating}/>
            </div>

            <div>
                <label>Stock</label>
                <input type='text' {...register("stock")} defaultValue={product.stock}/>
            </div>

            <div>
              <label>Images:</label>
              <textarea {...register("images")} defaultValue={product.images}
              onChange={(e)=>setText(e.target.value)}
              placeholder='Enter image URLS Separated by commas'
              
              ></textarea>

            </div>


            <div>
        <label htmlFor="category">Select Category:</label>
        <select id="category" {...register('category')} >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      {selectedCategory && (
        <div>
          <label htmlFor="brand">Select Brand:</label>
          <select id="brand" {...register('brand')}>
            <option value="">Select a brand</option>
            {categories
              .find((category) => category.name === selectedCategory)
              .brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
          </select>
        </div>
      )}
          

            <div>
              {id?<button>Edit</button>:<button>Save</button>}
              <button type='reset'>Reset</button>
            </div>
        </form>


        </div>
    );
};

export default ProductForm;