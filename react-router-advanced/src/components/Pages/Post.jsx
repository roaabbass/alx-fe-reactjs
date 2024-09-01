// src/pages/Post.jsx
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Post = () => {
  const { postId } = useParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const filter = queryParams.get('filter') || 'all';

  return (
    <div>
      <h2>Post {postId}</h2>
      <p>Filter: {filter}</p>
      {/* Fetch and display post details based on postId and filter */}
    </div>
  );
};

export default Post;
