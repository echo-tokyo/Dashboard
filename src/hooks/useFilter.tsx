import { usePropsFilter } from '../types/props'

const useFilter = ({ handleChange, tests }:usePropsFilter ) => {
  const filteredData = tests.filter(item =>
    item.name.toLowerCase().includes(handleChange.toLowerCase())
  );

  return { filteredData };
};

export default useFilter;