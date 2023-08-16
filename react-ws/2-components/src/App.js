import Box from "./Box"
import Products from "./Products"

function Employee(){
  return(
    <div>
      <h1>Name: Praveen</h1>
    </div>
  )
}


function App(){
  return(
    <div>
      <h1>Welcome to React!</h1> <hr/>

      <Products/>
      <Employee/>
      <Employee/>
      <Employee/>
      <hr/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>

    </div>
  )

}
export default App