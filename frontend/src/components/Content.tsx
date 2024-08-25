import React from 'react';
import { Box, AppBar, Toolbar, Typography, Card, CardContent, Button, Divider, CardActions, IconButton } from '@mui/material';
import { Menu as MenuIcon, PlayArrow as PlayArrowIcon, Today as TodayIcon } from '@mui/icons-material';

const Content = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <MenuIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 2 }}>
            Headline
          </Typography>
        </Toolbar>
      </AppBar>

      <Card>
        <CardContent>
          <Typography variant="h5">Headline</Typography>
          <Typography color="textSecondary">Published date</Typography>
          <Typography variant="body2" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Button variant="contained" sx={{ mt: 2 }}>Download</Button>
        </CardContent>
      </Card>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6">Section title</Typography>
      <Card sx={{ display: 'flex', my: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <CardContent>
            <Typography component="div" variant="h6">Title</Typography>
            <Typography variant="body2" color="text.secondary" component="p">
              Description duis aute irure dolor in reprehenderit in voluptate velit.
            </Typography>
            <Typography variant="caption" color="text.secondary" component="p">
              <TodayIcon sx={{ fontSize: 16 }} /> Today • 23 min
            </Typography>
          </CardContent>
        </Box>
        <CardActions>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Content;