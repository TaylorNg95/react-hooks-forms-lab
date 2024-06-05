import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('')
  const [mainItems, setMainItems] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(e){
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  // lifted from ItemForm

  const [name, setName] = useState('')
  const [category, setCategory] = useState('Produce')

  function handleNameChange(e) {
    setName(e.target.value)
    console.log(e.target.value)
  }

  function handleCategoryChange(e) {
    setName(e.target.value)
    console.log(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: name,
      category: category,
    }
    setMainItems([...mainItems, newItem])
  }

  const itemsToDisplay = mainItems.filter((item) => {
    if (selectedCategory === "All" && item.name.includes(search)) return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm
        name={name}
        category={category}
        handleNameChange={handleNameChange}
        handleCategoryChange={handleCategoryChange}
        onItemFormSubmit={handleSubmit}
      />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} search={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
