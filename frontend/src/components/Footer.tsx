import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { PlayArrow as PlayArrowIcon, Pause as PauseIcon, ArrowForward as ArrowForwardIcon } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, bgcolor: 'background.paper', p: 1 }}>
      <IconButton aria-label="play">
        <PlayArrowIcon />
      </IconButton>
      <IconButton aria-label="pause">
        <PauseIcon />
      </IconButton>
      <IconButton aria-label="forward">
        <ArrowForwardIcon />
      </IconButton>
      <Typography variant="body2" sx={{ display: 'inline-block', ml: 2 }}>Title • Artist</Typography>
    </Box>
  );
};

export default Footer;