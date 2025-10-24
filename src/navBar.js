import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
      <AppBar position="static">
        <Toolbar>
          {/* App Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Kavitha's Portfolio
          </Typography>

          {/* Navigation Links */}
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/education">Education</Button>
          <Button color="inherit" component={Link} to="/experience">Experience</Button>
          <Button color="inherit" component={Link} to="/skills">Skills</Button>
          <Button color="inherit" component={Link} to="/certifications">Certifications</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          <Button color="inherit" component={Link} to="/download">Resume</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
