import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

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

  function onItemFormSubmit(newItem) {
    setMainItems([...mainItems, newItem])
  }

  const itemsToDisplay = mainItems.filter((item) => {
    if (selectedCategory === "All" && item.name.includes(search)) return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm
        onItemFormSubmit={onItemFormSubmit}
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
