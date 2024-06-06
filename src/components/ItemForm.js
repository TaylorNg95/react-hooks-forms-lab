import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [newName, setNewName] = useState('')
  const [newCategory, setNewCategory] = useState('Produce')

  function handleNewNameChange(e) {
    setNewName(e.target.value)
    console.log(e.target.value)
  }

  function handleNewCategoryChange(e) {
    setNewCategory(e.target.value)
    console.log(e.target.value)
  }

  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: newName,
    category: newCategory
  }

  return (
    <form className="NewItem" onSubmit={(e) => {
      e.preventDefault()
      onItemFormSubmit(newItem)
    }}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNewNameChange} value={newName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleNewCategoryChange} value={newCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
