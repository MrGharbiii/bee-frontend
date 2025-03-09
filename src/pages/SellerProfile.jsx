import React, { Component } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Rating, Button } from '@mui/material';

class SellerProfile extends Component {
  render() {
    const seller = {
      name: 'John Doe',
      image: 'https://picsum.photos/200/200',
      rating: 4.5,
      description: 'Professional service provider with 5 years of experience.',
    };

    return (
      <Container>
        <Typography variant="h3" gutterBottom align="center" sx={{ mt: 4 }}>
          Seller Profile
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={seller.image}
                alt={seller.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {seller.name}
                </Typography>
                <Rating value={seller.rating} precision={0.5} readOnly />
                <Typography variant="body2" color="text.secondary">
                  {seller.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom>
              Reviews
            </Typography>
            {[1, 2, 3].map((review) => (
              <Card key={review} sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="h6">Review {review}</Typography>
                  <Rating value={4} readOnly />
                  <Typography variant="body2" color="text.secondary">
                    This is a review for the seller.
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default SellerProfile;