import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(newSearchTerm) {
    setSearchTerm(newSearchTerm);
  }

  // Filter by BOTH category AND search term
  const itemsToDisplay = items.filter((item) => {
    // First filter by category
    if (selectedCategory !== "All" && item.category !== selectedCategory) {
      return false;
    }
    // Then filter by search term (case-insensitive partial match)
    if (searchTerm && !item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter 
        search={searchTerm} 
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange} 
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;