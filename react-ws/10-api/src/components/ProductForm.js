import {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';


const ProductForm = () => {
    
    const[text,setText]=useState('');
    //const[imageUrls,setImageUrls]=useState([]);
    const {register,handleSubmit,formState:{errors},watch,control} = useForm({mode: "onChange"});
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
              <input {...register("firstName",{required:true,minLength: 2,pattern: /^[A-Za-z]+$/i })}/>
              <div className='text-danger'>
                {errors.firstName?.type==="required" &&(<>Product Name is required</>)}
                {errors.firstName?.type==="minLength" &&(<>Product Name should be minimum 2 characters</>)}
                {errors.firstName?.type==="pattern" &&(<>Product Name should contains only alphabets</>)}
              </div>
            </div>
            <div>
              <label>Price:</label>
              <input type='number' {...register("age",{required:true,min:1,max:1000000})} value={15000}/>
              <div className='text-danger'>
                {errors.age?.type==="required" &&(<>Age is required</>)}
                {errors.age?.type==="min" &&(<>Price should be minimum 1</>)}
                {errors.age?.type==="max" &&(<>Price should be maximum 1000000</>)}
              </div>
            </div>
           
            <div>
              <label>Description:</label>
              <textarea {...register("description")} value="desc1"></textarea>
            </div>
            <div>
                <label>Discount Percentage</label>
                <input type='text' {...register("discountPercentage")} value={5.3}/>
            </div>

            <div>
                <label>Thumbnail Image</label>
                <input type='text' {...register("thumbnail")} value={"img4"}/>
            </div>



            <div>
                <label>Rating</label>
                <input type='text' {...register("rating")} value={3.7}/>
            </div>

            <div>
                <label>Stock</label>
                <input type='text' {...register("stock")} value={10}/>
            </div>

            <div>
              <label>Images:</label>
              <textarea {...register("images")} value={text}
              onChange={(e)=>setText(e.target.value)}
              placeholder='Enter image URLS Separated by commas'
              
              ></textarea>
            </div>

            <div>
              <button>Save</button>
            </div>
        </form>


        </div>
    );
};

export default ProductForm;