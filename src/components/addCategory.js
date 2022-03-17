import { useState } from "react"

export const AddCategory = () => {

  const [inputValue, setInputValue] = useState('hola mundillo')

  const handleInputChange = (e) => {
    setInputValue(setInputValue(e.target.value))
  }

  const handleSumit = (e) => {
    e.preventDefault();
    console.log("sumit hecho");
  }

  return (
    <form onSubmit={ handleSumit }>
      <input
        type= "text"
        value= {inputValue}
        onChange={ (e) => {handleInputChange(e)}  }
        />
    </form>
  )
}