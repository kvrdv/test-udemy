import React, { useState } from 'react';
import './post-list-item.css';

export default function PostListItem({ label }) {
  let [important, setImportant] = useState(false);
  let [like, setLike] = useState(false);

  let classNames = 'app-list-item d-flex justify-content-between';

  if (important) {
    classNames += ' important';
  }

  if (like) {
    classNames += ' like';
  }

  return (
    <div className={classNames}>
      <span onClick={() => setLike((like = !like))} className="app-list-item-label">
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button onClick={() => setImportant((important = !important))} type="button" className="btn-star btn-sm">
          Star
        </button>
        <button type="button" className="btn-trash btn-sm">
          Bin
        </button>
        <i className="fa fa-heart">Like</i>
      </div>
    </div>
  );
}
