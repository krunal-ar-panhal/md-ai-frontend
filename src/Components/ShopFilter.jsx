import React from "react";

const ShopFilter = ({ filter, filterState, setFilterState, clearFilters }) => {
  return (
    <div className="space-y-5 flex-shrink-0">
      <h3>Filters</h3>
      {/* FOR CATEGORYS */}
      <div className="flex flex-col space-y-2">
        <h4 className="font-medium text-lg">Categorys</h4>
        <hr />
        {filter.categories.map((category) => (
          <label htmlFor="" key={category} className="capitalize cursor-pointer">
            <input
              type="radio"
              name="category"
              id="category"
              value={category}
              checked={filterState.category === category}
              onChange={(e) =>
                setFilterState({
                  ...filterState,
                  category: e.target.value,
                })
              }
            />
            <span className="ml-1">{category}</span>
          </label>
        ))}
      </div>
        {/* FOR COLORS */}
      <div className="flex flex-col space-y-2">
        <h4 className="font-medium text-lg">Colors</h4>
        <hr />
        {filter.colors.map((color) => (
          <label htmlFor="" key={color} className="capitalize cursor-pointer">
            <input
              type="radio"
              name="color"
              id="color"
              value={color}
              checked={filterState.color === color}
              onChange={(e) =>
                setFilterState({
                  ...filterState,
                  color: e.target.value,
                })
              }
            />
            <span className="ml-1">{color}</span>
          </label>
        ))}
      </div>
      {/* FOR PRICE */}
      <div className="flex flex-col space-y-2">
  <h4 className="font-medium text-lg">Price Range</h4>
  <hr />
  {filter.priceRange.map((range) => (
    <label htmlFor="" key={range.label} className="capitalize cursor-pointer">
      <input
        type="radio"
        name="priceRange"
        id="priceRange"
        value={`${range.min}-${range.max}`}
        checked={filterState.priceRange === `${range.min}-${range.max}`}
        onChange={(e) =>
          setFilterState({
            ...filterState,
            priceRange: e.target.value,
          })
        }
      />
      <span className="ml-1">{range.label}</span>
    </label>
  ))}
</div>

<button onClick={clearFilters} className="bg-primary py-1 px-4 text-white rounded">Clear All Filters</button>
    </div>
  );
};

export default ShopFilter;
