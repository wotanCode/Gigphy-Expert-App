import { useState } from "react";

const GigphyExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon ball']);

  const handleAdd = () => {
    //setCategories(["HunterXHunter", ...categories, ])
    setCategories([ ...categories, "HunterXHunter" ])
  }

  return (
    <>
      <h2>GigphyExpertApp</h2>
      <hr/>

      <button onClick={ handleAdd }>Agregar</button>

      <ol>
        {categories.map( category =>{
          return <li key={category}>{category}</li>
        })}
      </ol>

    </>
  )
}
export default GigphyExpertApp;