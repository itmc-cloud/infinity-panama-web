import React from 'react';
import { Typography, Box, List, ListItem } from '@mui/material';
import './News.css';

const News = () => {
  const newsItems = [
    'News Item 1',
    'News Item 2',
    'News Item 3',
  ];

  return (
    <Box className="news" sx={{ padding: '16px' }}>
      <Typography variant="h5">Latest News</Typography>
      <List>
        {newsItems.map((news, index) => (
          <ListItem key={index}>{news}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default News;