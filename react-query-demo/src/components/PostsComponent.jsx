// src/components/PostsComponent.jsx
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const PostsComponent = () => {
  const {
    data,
    error,
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useQuery('posts', fetchPosts, {
    cacheTime: 1000 * 60 * 10,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error fetching posts: {error.message}</div>;

  return (
    <div>
      <h2>Posts List</h2>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? 'Refetching...' : 'Refetch Posts'}
      </button>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {data.length === 0 && <div>No posts available.</div>}
    </div>
  );
};

export default PostsComponent;
