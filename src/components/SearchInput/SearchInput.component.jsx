import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Search from '../../utils/svg/Search';
import { SearchBar } from './SearchInput.styled';
import useDebounce from '../../utils/hooks/useDebounce';

function SearchInput({ fetchVideos }) {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const history = useHistory();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useDebounce(
    () => {
      fetchVideos(searchTerm);
      if (location.pathname !== '/') {
        history.push('/');
      }
    },
    [searchTerm],
    300
  );

  return (
    <SearchBar searchTerm={searchTerm}>
      <Search />
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </SearchBar>
  );
}

export default SearchInput;