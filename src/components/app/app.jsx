import React, { Component } from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import './app.css';

export default function App() {
  const data = [
    { id: 'd65b5e6', label: 'Going to learn React' },
    { id: 'he56h', label: 'That is good' },
    { id: 'he5h6eby', label: 'I need a brake...' },
  ];

  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
}
