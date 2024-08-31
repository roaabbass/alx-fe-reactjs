

import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery(['posts'], fetchPosts);

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div>Error fetching posts: {error.message}</div>;
  }

  return (
    <div>
      <button onClick={() => refetch()} style={{ marginBottom: '20px' }}>
        Refetch Posts
      </button>
      <ul>
        {data.map(post => (
          <li key={post.id} style={{ marginBottom: '15px' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
