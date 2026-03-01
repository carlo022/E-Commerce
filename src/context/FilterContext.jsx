import { createContext, useContext } from 'react'
import { FilterReducers } from '../reducers'
import { useReducer } from 'react'

const filterInitials = {
  searchQuery: '',
  sortBy: '',
  category: '',
  sale: false,
  new: false,
  instock: false,
}

const FilterContext = createContext(filterInitials)

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FilterReducers, filterInitials);

  function setSearchQuery(query) {
    dispatch({ type: "SET_SEARCH_QUERY", payload: query });
  }

  function setSortBy(sortBy) {
    dispatch({ type: "SET_SORT_BY", payload: sortBy });
  }

  function setCategory(category) {
    dispatch({ type: "SET_CATEGORY", payload: category });
  }

  function setSale(sale) {
    dispatch({ type: "SET_SALE", payload: sale });
  }

  function setNew(newOnly) {
    dispatch({ type: "SET_NEW", payload: newOnly });
  }

  function setInstock(instock) {
    dispatch({ type: "SET_INSTOCK", payload: instock });
  }

  function clearFilters() {
    dispatch({ type: "CLEAR_FILTERS" });
  }

  const value = {
    ...state,
    setSearchQuery,
    setSortBy,
    setCategory,
    setSale,
    setNew,
    setInstock,
    clearFilters
  }

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () =>{
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
}
