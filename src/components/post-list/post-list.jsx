import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import './post-list.css';

export default function PostList({ posts }) {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={item.id} className="list-group-item">
        <PostListItem {...itemProps} />
      </li>
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
}
