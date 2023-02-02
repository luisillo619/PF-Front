import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../redux/actions/index";

// hook personalizado ayuda a mandar los filtros a redux
function useFilter(filterValidations) {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);

  const [filtersState, setFiltersState] = useState(filters);

  useEffect(() => {
    filterValidations(filtersState, dispatch, addFilter);
  }, [filterValidations, dispatch, filtersState]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltersState({
      ...filtersState,
      [name]: value,
    });
  };

  function nameOptions(allProducts, search) {
    const filteredPokemons = allProducts.filter((allProducts) =>
      allProducts.name.toLowerCase().includes(search.toLowerCase())
    );
    return filteredPokemons.map((e) => <option key={e.name} value={e.name} />);
  }

  return {
    filtersState,
    handleChange,
    nameOptions,
    products,
    categories
  };
}

export default useFilter;
