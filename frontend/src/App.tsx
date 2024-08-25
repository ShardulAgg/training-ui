import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Content />
      <Footer />
    </Box>
  );
}

export default App;