import React from 'react';

import './postStatusFilter.css'

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
      <button>Все</button>
      <button type="submit" className="btn-outline-secondary">Понравилось</button>
    </div>
  );
};

export default PostStatusFilter;
