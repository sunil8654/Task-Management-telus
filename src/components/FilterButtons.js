import React from "react";

const FilterButtons = ({ setFilter, currentFilter, toggleSortOrder, sortOrder }) => {
  const filters = ["All", "Active", "Completed"];

  return (
    <div className="filter-buttons">
      {filters.map((filter) => (
        <button
          key={filter}
          className={currentFilter === filter ? "active" : ""}
          onClick={() => setFilter(filter)}
        >
          {filter}
        </button>
      ))}

      {toggleSortOrder && (
        <button 
          className={`sort-button ${sortOrder}`}
          onClick={toggleSortOrder} >
            
          Date ({sortOrder === "asc" ? "Oldest" : "Newest"})
        </button>
      )}
    </div>
  );
};

export default FilterButtons;
