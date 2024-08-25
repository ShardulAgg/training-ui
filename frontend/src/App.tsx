import React from 'react';
import { CssBaseline, Box, Container, Toolbar, Typography, Button, Divider, List, ListItem, ListItemText, ListItemIcon, Card, CardContent, CardActions, IconButton, AppBar } from '@mui/material';
import { Menu as MenuIcon, PlayArrow as PlayArrowIcon, Pause as PauseIcon, ArrowForward as ArrowForwardIcon, Star as StarIcon, Today as TodayIcon } from '@mui/icons-material';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* Sidebar */}
      <Box component="nav" sx={{ width: 250, flexShrink: 0 }}>
        <Box sx={{ width: 250, bgcolor: 'background.paper' }}>
          <Toolbar />
          <List>
            {['Training', 'Past Jobs', 'Experiments', 'Resource'].map((text, index) => (
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

      {/* Main Content */}
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

        {/* Section */}
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

        {/* Bottom Media Controls */}
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
      </Box>
    </Box>
  );
}

export default App;
