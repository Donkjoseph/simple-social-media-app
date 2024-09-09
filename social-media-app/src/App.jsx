// src/App.js
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Typography, Box } from '@mui/material';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import NewsFeed from './components/NewsFeed';

// Custom Theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#00796b', // Teal as primary color
    },
    secondary: {
      main: '#ff5722', // Orange as secondary color
    },
    background: {
      default: '#f4f4f4',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: {
      fontWeight: 600,
      color: '#00796b',
    },
    h5: {
      fontWeight: 500,
      color: '#333',
    },
    body1: {
      color: '#666',
    },
  },
});

function App() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" style={{ marginTop: '30px' }}>
        {!user ? (
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              padding: 3, 
              boxShadow: 3, 
              borderRadius: 2, 
              backgroundColor: 'background.paper' 
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome to Social App
            </Typography>
            <Login setUser={setUser} />
          </Box>
        ) : (
          <>
            <CreatePost user={user} addPost={addPost} />
            <NewsFeed posts={posts} />
          </>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
