import React from 'react';
import AppHeader from '../appHeader/AppHeader';
import SearchPanel from '../searchPanel/SearchPanel';
import PostStatusFilter from '../postStatusFilter/PostStatusFilter';
import PostList from '../postList/PostList';
import PostAddForm from '../postAddForm/PostAddForm';

import './app.css';

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList />
      <PostAddForm />
    </div>
  );
};

export default App;
