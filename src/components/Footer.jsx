import React, { Component } from 'react';
import { Typography, Box } from '@mui/material';

class Footer extends Component {
  render() {
    return (
      <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, mt: 'auto' }}>
        <Typography variant="body1" align="center">
          © 2023 Platform Name. All rights reserved.
        </Typography>
      </Box>
    );
  }
}

export default Footer;