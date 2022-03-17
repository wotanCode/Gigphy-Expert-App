import { useState } from "react";
import { AddCategory } from "./components/addCategory";


const GigphyExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon ball']);

  // const handleAdd = () => {
  //   //setCategories(["HunterXHunter", ...categories, ])
  //   setCategories([ ...categories, "HunterXHunter" ])
  // }

  return (
    <>
      <h2>GigphyExpertApp</h2>
      <hr/>

      {/* <button onClick={ handleAdd }>Agregar</button> */}
      <AddCategory />

      <ol>
        {categories.map( category =>{
          return <li key={category}>{category}</li>
        })}
      </ol>

    </>
  )
}
export default GigphyExpertApp;