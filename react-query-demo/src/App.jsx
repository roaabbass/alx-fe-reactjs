// src/App.jsx
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from '.components/PostsComponent';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Posts List</h1>
        <PostsComponent />
      </div>
     
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
