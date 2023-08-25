import React from 'react';
import {Controller, useForm} from 'react-hook-form';
const App = () => {

  const {register,handleSubmit,formState:{errors},watch,control} = useForm({mode: "onChange"});
  const handleUser=(user)=>console.log(user);

  const countryStates={
    "INDIA":['Tamilnadu','Karnataka','Maharatra','Telangana','Andhra Pradesh'],
    "USA":['New York','California','Texas','Virginia','Dellas'],
    "UK":['England','Massachusetts','Wales'],
    "CANADA":['Ontario','Quebec','Albetra']
  }

  const country=watch("country");
  const states=country?countryStates[country]:[]
  
  return (
    <div className='container'>
      <h1>React Hook Form</h1> <hr/>
      <div>
        <form onSubmit={handleSubmit(handleUser)}>
            <div>
              <label>First Name:</label>
              <input {...register("firstName",{required:true,minLength: 2,pattern: /^[A-Za-z]+$/i })}/>
              <div className='text-danger'>
                {errors.firstName?.type==="required" &&(<>First Name is required</>)}
                {errors.firstName?.type==="minLength" &&(<>First Name should be minimum 2 characters</>)}
                {errors.firstName?.type==="pattern" &&(<>First Name should contains only alphabets</>)}
              </div>
            </div>
            <div>
              <label>Age:</label>
              <input type='number' {...register("age",{required:true,min:18,max:80})}/>
              <div className='text-danger'>
                {errors.age?.type==="required" &&(<>Age is required</>)}
                {errors.age?.type==="min" &&(<>Age should be minimum 18 years</>)}
                {errors.age?.type==="max" &&(<>Age should be maximum 80 years</>)}
              </div>
            </div>
           
            <div>
              <label>Email:</label>
              <input {...register("email")}/>
            </div>

            <div>
              <select {...register("country")}>
              <option>Selct a country</option>
              {Object.keys(countryStates).map((country)=>(
                <option key={country} value={country}>{country}</option>
              ))}
              </select>
              
              <br/>

              <Controller name="state" control={control} 
                render={({field})=>(
                  <select {...field}>
                    <option>Select state</option>
                    {states.map((state)=>(
                      <option key={state}>{state}</option>
                    ))}
                  </select>
                  )}/>
    
            </div>


            <div>
              <button>Save</button>
            </div>
        </form>
      </div>
      
    </div>
  );
};

export default App;