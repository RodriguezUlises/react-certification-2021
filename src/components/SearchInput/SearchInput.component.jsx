import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Search from '../../utils/svg/Search';
import { SearchBar } from './SearchInput.styled';
import useDebounce from '../../utils/hooks/useDebounce';
import { DataContext, ACTIONS } from '../../providers/Context/DataContext';
import useYoutubeApi from '../../utils/hooks/useYoutubeApi';

function SearchInput() {
  const appContext = useContext(DataContext);
  const location = useLocation();
  const history = useHistory();
  const { fetchVideos } = useYoutubeApi();

  const handleChange = (e) => {
    appContext.dispatch({
      type: ACTIONS.SET_SEARCH_TERM,
      payload: e.target.value,
    });
  };

  useDebounce(
    () => {
      fetchVideos(appContext.state.searchTerm);
      if (location.pathname !== '/') {
        history.push('/');
      }
    },
    [appContext.state.searchTerm],
    300
  );

  return (
    <SearchBar searchTerm={appContext.state.searchTerm}>
      <Search />
      <input
        type="text"
        placeholder="Search"
        value={appContext.state.searchTerm}
        onChange={handleChange}
      />
    </SearchBar>
  );
}

export default SearchInput;
