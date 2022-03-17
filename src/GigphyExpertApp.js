import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GigphyExpertApp = () => {
  
  const [categories, setCategories] = useState(['Dragon ball']);

  return (
    <>
      <h2>GigphyExpertApp</h2>
      <hr/>

      {/* <button onClick={ handleAdd }>Agregar</button> */}
      <AddCategory setCategories={ setCategories }  />

      <ol>
        {
          categories.map( category => 
            <GifGrid
              key={ category } 
              category ={ category } />
            // <li key={category}>{category}</li>
          )
        }
      </ol>

    </>
  )
}
export default GigphyExpertApp;