import React from 'react';
import { Box, Toolbar, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Star as StarIcon } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Box component="nav" sx={{ width: 250, flexShrink: 0 }}>
      <Box sx={{ width: 250, bgcolor: 'background.paper' }}>
        <Toolbar />
        <List>
          {['Training', 'Past Jobs', 'Experiments', 'Resource'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
