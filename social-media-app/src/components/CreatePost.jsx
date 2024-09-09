// src/components/CreatePost.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

function CreatePost({ user, addPost }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content) {
      addPost({ user, content });
      setContent(''); // Clear the post input field
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '30px' }}>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          padding: 3, 
          boxShadow: 3, 
          borderRadius: 2, 
          backgroundColor: 'background.paper' 
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          Create a Post
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="What's on your mind?"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <Button 
            type="submit" 
            fullWidth 
            variant="contained" 
            color="primary"
            sx={{ marginTop: 2 }}
          >
            Post
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default CreatePost;
