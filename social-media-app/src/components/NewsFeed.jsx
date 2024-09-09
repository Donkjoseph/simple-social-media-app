// src/components/NewsFeed.js
import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

function NewsFeed({ posts }) {
  return (
    <Container maxWidth="sm" style={{ marginTop: '30px' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        News Feed
      </Typography>
      {posts.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          No posts yet. Start by creating one!
        </Typography>
      ) : (
        posts.map((post, index) => (
          <Paper 
            key={index} 
            elevation={3} 
            sx={{ 
              padding: 2, 
              margin: '10px 0', 
              borderRadius: 2 
            }}
          >
            <Typography variant="h6" component="h4">
              {post.user}
            </Typography>
            <Box sx={{ marginTop: 1 }}>
              <Typography variant="body1">
                {post.content}
              </Typography>
            </Box>
          </Paper>
        ))
      )}
    </Container>
  );
}

export default NewsFeed;
