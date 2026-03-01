export const FilterReducers = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: payload };
    case "SET_CATEGORY":
      return { ...state, category: payload };
    case "SET_SORT_BY":
      return { ...state, sortBy: payload };
    case "SET_SALE":
      return { ...state, sale: payload };
    case "SET_NEW":
      return { ...state, new: payload };
    case "SET_INSTOCK":
      return { ...state, instock: payload };
    case "CLEAR_FILTERS":
      return {
        searchQuery: '',
        sortBy: '',
        category: '',
        sale: false,
        new: false,
        instock: false,
      };
    default:
      return state;
  }
}

export default FilterReducers;
