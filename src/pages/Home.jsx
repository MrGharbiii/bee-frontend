import React, { Component } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

class Home extends Component {
  render() {
    return (
      <Container>
        <Typography variant="h3" gutterBottom align="center" sx={{ mt: 4 }}>
          Welcome to Our Platform
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 4 }}>
          Find the best service providers in your area.
        </Typography>

        <Grid container spacing={4}>
          {[1, 2, 3,4,5,6,7,8,9].map((item) => (
            <Grid item key={item} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://picsum.photos/300/200?random=${item}`}
                  alt="Service"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    Service {item}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description of service {item}.
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default Home;